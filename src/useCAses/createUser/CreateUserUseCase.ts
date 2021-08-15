import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreteUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";


export class CreateUserUSeCase{
  constructor(
   private usersRepository: IUsersRepository,
   private mailProvaider: IMailProvider, 
  ){}
  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error('User already exists!')
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvaider.sendEmail({
      to: {
        name: data.name,
        email:  data.email, 
      },
      from: {
        name: "Leoanardo.fernandes",
        email: "leo.fernandes98@hotmail.com" 
      },
      subject: "Testando S.O.L.I.D",
      body: '<p>Corpo da mensagem.</p>'
    });
     
  }
}