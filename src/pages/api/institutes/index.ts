import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { instituteValidationSchema } from 'validationSchema/institutes';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getInstitutes();
    case 'POST':
      return createInstitute();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInstitutes() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.institute
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'institute'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createInstitute() {
    await instituteValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.course?.length > 0) {
      const create_course = body.course;
      body.course = {
        create: create_course,
      };
    } else {
      delete body.course;
    }
    if (body?.service?.length > 0) {
      const create_service = body.service;
      body.service = {
        create: create_service,
      };
    } else {
      delete body.service;
    }
    const data = await prisma.institute.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
