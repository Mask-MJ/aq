import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EaServiceBase } from "./base/ea.service.base";

@Injectable()
export class EaService extends EaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
