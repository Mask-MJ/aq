/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Ea } from "@prisma/client";

export class EaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EaCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaCountArgs>
  ): Promise<number> {
    return this.prisma.ea.count(args);
  }

  async findMany<T extends Prisma.EaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaFindManyArgs>
  ): Promise<Ea[]> {
    return this.prisma.ea.findMany(args);
  }
  async findOne<T extends Prisma.EaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaFindUniqueArgs>
  ): Promise<Ea | null> {
    return this.prisma.ea.findUnique(args);
  }
  async create<T extends Prisma.EaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaCreateArgs>
  ): Promise<Ea> {
    return this.prisma.ea.create<T>(args);
  }
  async update<T extends Prisma.EaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaUpdateArgs>
  ): Promise<Ea> {
    return this.prisma.ea.update<T>(args);
  }
  async delete<T extends Prisma.EaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EaDeleteArgs>
  ): Promise<Ea> {
    return this.prisma.ea.delete(args);
  }
}
