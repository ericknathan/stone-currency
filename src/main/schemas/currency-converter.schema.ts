import { z } from "zod";

export const currencyConverterSchema = z.object({
    currency: z
        .string({
            required_error: 'A moeda é obrigatória!',
            invalid_type_error: 'A moeda deve ser um número!'
        })
        .min(1, 'A moeda deve ser um número maior que zero!'),
    statePercentageTax: z
        .number({
            invalid_type_error: 'A taxa do estado deve ser um número!',
            required_error: 'A taxa do estado é obrigatória!'
        })
        .min(0, 'A taxa deve ser um número maior que zero!')
        .max(100, 'A taxa deve ser um número entre 0 e 100!'),
    paymentType: z
        .enum(['money', 'card'])
        .default('money')
});

export type ICurrencyConverter = z.infer<typeof currencyConverterSchema>;