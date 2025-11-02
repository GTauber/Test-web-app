import { useState, type FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Fale Conosco
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              Estamos prontos para atender sua necessidade. Entre em contato
              através dos canais abaixo ou preencha o formulário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Email</h4>
                  <a
                    href="mailto:contato@droneserv.com.br"
                    className="text-primary hover:underline"
                  >
                    contato@droneserv.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">📱</div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Telefone</h4>
                  <a
                    href="tel:+5511999999999"
                    className="text-primary hover:underline"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">💬</div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Localização</h4>
                  <p className="text-gray-600">
                    São Paulo, SP - Brasil
                    <br />
                    Atendimento em todo o território nacional
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">
                Horário de Atendimento
              </h4>
              <p className="text-gray-700">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 9h às 13h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-xl shadow-md"
            >
              <div className="mb-6">
                <label
                  htmlFor="nome"
                  className="block text-secondary font-semibold mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-secondary font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="telefone"
                  className="block text-secondary font-semibold mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="servico"
                  className="block text-secondary font-semibold mb-2"
                >
                  Serviço de Interesse *
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="obras">Inspeção de Obras</option>
                  <option value="solar">Inspeção de Placas Solares</option>
                  <option value="telhados">Inspeção de Telhados</option>
                  <option value="infraestrutura">Inspeção de Infraestrutura</option>
                  <option value="fachadas">Inspeção de Fachadas</option>
                  <option value="topografico">Mapeamento Topográfico</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mensagem"
                  className="block text-secondary font-semibold mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                  placeholder="Conte-nos mais sobre sua necessidade..."
                />
              </div>

              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition transform hover:scale-105 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
