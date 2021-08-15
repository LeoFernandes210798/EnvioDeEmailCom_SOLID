import { MailtrapMailProvaider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUSeCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvaider()
const postgresUserRepository = new PostgresUserRepository();
const createUserUSeCase = new CreateUserUSeCase(
  postgresUserRepository,
  mailtrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUSeCase,
);

export { createUserUSeCase, createUserController  }