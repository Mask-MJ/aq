import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EaModuleBase } from "./base/ea.module.base";
import { EaService } from "./ea.service";
import { EaResolver } from "./ea.resolver";

@Module({
  imports: [EaModuleBase, forwardRef(() => AuthModule)],
  providers: [EaService, EaResolver],
  exports: [EaService],
})
export class EaModule {}
