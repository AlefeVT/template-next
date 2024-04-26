'use client';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Button } from '../button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit: handleSubmitAsync,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data);
      toast.success('Mensagem enviada com sucesso!');
      reset();
    } catch {
      toast.error('Erro ao enviar a mensagem. Tente novamente');
    }
  };

  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmitAsync(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emeral-600"
            {...register('name')}
          />

          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emeral-600"
            {...register('email')}
          />

          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emeral-600"
            maxLength={500}
            {...register('message')}
          />

          <div className="mx-auto mt-6">
            <Button className="shadow-button" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
