const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🚁 DroneServ</h3>
            <p className="text-gray-300">
              Soluções profissionais de inspeção com drones para diversos
              segmentos do mercado.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('inicio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('servicos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('sobre');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contato');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 contato@droneserv.com.br</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} DroneServ. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            CNPJ: 00.000.000/0001-00 | Certificação ANAC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
