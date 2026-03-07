"use client"

export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input id="senha" type="password" />
      </div>

      <button type="submit">Entrar</button>
    </form>
  )
}