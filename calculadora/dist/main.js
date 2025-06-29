"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
    .then(() => console.warn('Server is running!'))
    .catch((err) => console.error('Error starting server:', err));
//# sourceMappingURL=main.js.map