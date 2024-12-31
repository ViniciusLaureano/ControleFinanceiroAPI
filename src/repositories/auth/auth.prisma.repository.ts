import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { PrismaService } from 'src/database/prisma.service';
import {
  Allocation,
  Bank_Account,
  Category,
  Subcategory,
  User,
  UserPermission,
} from '@prisma/client';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaService) {}

  register(
    email: string,
    first_name: string,
    last_name: string,
    nickname: string,
    password: string,
    permission: UserPermission,
  ): Promise<User> {
    return this.prisma.$transaction(async (prisma) => {
      const allocations: Allocation[] = [];
      const categories: Category[] = [];
      const bankAccounts: Bank_Account[] = [];

      const user = await this.prisma.user.create({
        data: { email, first_name, last_name, nickname, password, permission },
      });

      // ---------------

      allocations.push(
        await prisma.allocation.create({
          data: { user_id: user.id, name: 'Gastos Obrigatórios', percent: 50 },
        }),
      );

      allocations.push(
        await prisma.allocation.create({
          data: { user_id: user.id, name: 'Lazer', percent: 30 },
        }),
      );

      allocations.push(
        await prisma.allocation.create({
          data: { user_id: user.id, name: 'Investimento', percent: 20 },
        }),
      );

      // ---------------

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Geral', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Dia-a-Dia', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Casa', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Veículo', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Estudo', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Saúde', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Outros', in_out: 'D' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: { user_id: user.id, name: 'Trabalho', in_out: 'R' },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: {
            user_id: user.id,
            name: 'Casa de Aluguel',
            in_out: 'R',
          },
        }),
      );

      categories.push(
        await prisma.category.create({
          data: {
            user_id: user.id,
            name: 'Casa de Aluguel',
            in_out: 'D',
          },
        }),
      );
      // ---------------

      await prisma.subcategory.createMany({
        data: [
          {
            category_id: categories[0].id,
            allocation_id: allocations[1].id,
            name: 'Celular',
          },
          {
            category_id: categories[0].id,
            allocation_id: allocations[1].id,
            name: 'Vestuário',
          },
          {
            category_id: categories[0].id,
            allocation_id: allocations[1].id,
            name: 'Computador',
          },
          {
            category_id: categories[0].id,
            allocation_id: allocations[1].id,
            name: 'Cabelo',
          },
          {
            category_id: categories[1].id,
            allocation_id: allocations[0].id,
            name: 'Refeição',
          },
          {
            category_id: categories[1].id,
            allocation_id: allocations[0].id,
            name: 'Transporte',
          },
          {
            category_id: categories[1].id,
            allocation_id: allocations[0].id,
            name: 'Lavanderia',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Aluguel',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Luz',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Água',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Supermercado',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Internet',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'Manutenção',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[1].id,
            name: 'Streaming',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[0].id,
            name: 'IPTU',
          },
          {
            category_id: categories[2].id,
            allocation_id: allocations[1].id,
            name: 'Diversos',
          },
          {
            category_id: categories[3].id,
            allocation_id: allocations[0].id,
            name: 'Manutenção',
          },
          {
            category_id: categories[3].id,
            allocation_id: allocations[0].id,
            name: 'Revisão',
          },
          {
            category_id: categories[3].id,
            allocation_id: allocations[0].id,
            name: 'IPVA',
          },
          {
            category_id: categories[4].id,
            allocation_id: allocations[0].id,
            name: 'Mensalidade',
          },
          {
            category_id: categories[4].id,
            allocation_id: allocations[0].id,
            name: 'Escola de Inglês',
          },
          {
            category_id: categories[4].id,
            allocation_id: allocations[0].id,
            name: 'Escola de Música',
          },
          {
            category_id: categories[4].id,
            allocation_id: allocations[0].id,
            name: 'Cursos Extras',
          },
          {
            category_id: categories[4].id,
            allocation_id: allocations[0].id,
            name: 'Material Escolar',
          },
          {
            category_id: categories[5].id,
            allocation_id: allocations[0].id,
            name: 'Medicamento',
          },
          {
            category_id: categories[5].id,
            allocation_id: allocations[0].id,
            name: 'Exame',
          },
          {
            category_id: categories[5].id,
            allocation_id: allocations[0].id,
            name: 'Consulta Médica',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Presente',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Doação',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[0].id,
            name: 'Passagem Aérea',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Viagem',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Jogo',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Passeio',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[0].id,
            name: 'Imposto de Renda',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[0].id,
            name: 'Tarifas Bancárias',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[1].id,
            name: 'Livro',
          },
          {
            category_id: categories[6].id,
            allocation_id: allocations[0].id,
            name: 'Outras Tarifas',
          },
          {
            category_id: categories[7].id,
            allocation_id: allocations[0].id,
            name: 'Salário',
          },
          {
            category_id: categories[7].id,
            allocation_id: allocations[0].id,
            name: 'Décimo Terceiro',
          },
          {
            category_id: categories[7].id,
            allocation_id: allocations[0].id,
            name: 'Vale Alimentação',
          },
          {
            category_id: categories[7].id,
            allocation_id: allocations[0].id,
            name: 'Vale Transporte',
          },
          {
            category_id: categories[7].id,
            allocation_id: allocations[0].id,
            name: 'Bonificação',
          },
          {
            category_id: categories[8].id,
            allocation_id: allocations[0].id,
            name: 'Aluguel',
          },
          {
            category_id: categories[9].id,
            allocation_id: allocations[0].id,
            name: 'Manutenção',
          },
          {
            category_id: categories[9].id,
            allocation_id: allocations[0].id,
            name: 'Condomínio',
          },
          {
            category_id: categories[9].id,
            allocation_id: allocations[0].id,
            name: 'IPTU',
          },
        ],
      });

      // ---------------

      bankAccounts.push(
        await prisma.bank_Account.create({
          data: {
            user_id: user.id,
            name: 'Dinheiro',
            type: 'Conta_Corrente',
            initial_value: 3000,
            bank: 'Dinheiro',
          },
        }),
      );

      bankAccounts.push(
        await prisma.bank_Account.create({
          data: {
            user_id: user.id,
            name: 'Conta Principal',
            type: 'Conta_Corrente',
            initial_value: 3000,
            bank: 'Banco do Brasil',
          },
        }),
      );

      bankAccounts.push(
        await prisma.bank_Account.create({
          data: {
            user_id: user.id,
            name: 'Reserva de Emergência',
            type: 'Conta_Poupança',
            initial_value: 10000,
            bank: 'Banco do Brasil S.A.',
          },
        }),
      );

      bankAccounts.push(
        await prisma.bank_Account.create({
          data: {
            user_id: user.id,
            name: 'Conta Casa',
            type: 'Conta_Corrente',
            initial_value: 2000,
            bank: 'CAIXA ECONOMICA FEDERAL',
          },
        }),
      );

      bankAccounts.push(
        await prisma.bank_Account.create({
          data: {
            user_id: user.id,
            name: 'Conta de Invsetimento',
            type: 'Conta_Investimento',
            initial_value: 25000,
            bank: 'XP INVESTIMENTOS CORRETORA DE CÂMBIO,TÍTULOS E VALORES MOBILIÁRIOS S/A',
          },
        }),
      );

      // ---------------

      await prisma.credit_Card.create({
        data: {
          bank_account_id: bankAccounts[1].id,
          name: 'Cartão Banco do Brasil',
          expiration_date: new Date('2030-01-01'),
          limit_value: 2500,
        },
      });

      // ---------------

      await prisma.transaction_Method.createMany({
        data: [
          { bank_account_id: bankAccounts[0].id, name: 'Dinheiro' },
          { bank_account_id: bankAccounts[1].id, name: 'PIX - email' },
          { bank_account_id: bankAccounts[1].id, name: 'Cartão de Débito' },
          {
            bank_account_id: bankAccounts[1].id,
            name: 'Transferência Bancária',
          },
          { bank_account_id: bankAccounts[2].id, name: 'PIX - CPF' },
          { bank_account_id: bankAccounts[2].id, name: 'Cartão de Crédito' },
          {
            bank_account_id: bankAccounts[2].id,
            name: 'Transferência Bancária',
          },
          {
            bank_account_id: bankAccounts[3].id,
            name: 'Transferência Bancária',
          },
          { bank_account_id: bankAccounts[4].id, name: 'Transação Bancária' },
        ],
      });

      // --------------

      return user;
    });
  }

  searchUserLogin(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email: email } });
  }
}
