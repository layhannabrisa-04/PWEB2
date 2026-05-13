export default function Contact() {
  return (
    <div style={{ padding: '20px' }} className="card">
      <h1>Fale Comigo</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ffc0cb' }} type="text" placeholder="Seu Nome completo" />
        <input style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ffc0cb' }} type="email" placeholder="Seu melhor e-mail" />
        <textarea style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ffc0cb', height: '100px' }} placeholder="Escreva sua mensagem aqui..."></textarea>
        <button style={{ background: '#ff69b4', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }} type="button">Enviar Mensagem</button>
      </form>
    </div>
  );
}