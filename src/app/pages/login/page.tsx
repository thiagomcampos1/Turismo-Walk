import React from 'react';
import Link from 'next/link';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/Button/SubmitButton';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-white to-blue-600">
      <div className="w-full max-w-md bg-black p-8 rounded-lg mx-5 md:mx-0">
        <div className="text-center mb-8">
          <h2 className="mt-6 text-3xl font-extrabold text-white">LOGIN</h2>
        </div>
        <form className="space-y-6">
          <InputField id="username" label="Usuário" type="text" />
          <InputField id="password" label="Senha" type="password" />
          <SubmitButton text="ENTRAR" />
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Ainda não tem uma conta?{' '}
            <Link href="/pages/registrar" className="text-blue-500 hover:text-blue-400">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
