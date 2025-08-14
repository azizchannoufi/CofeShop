import '../../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">Café Vintage</h3>
            <p className="footer-since">Depuis 1985</p>
          </div>
          
          <div className="footer-info">
            <p className="footer-address">123 Rue du Café, Paris</p>
            <p className="footer-hours">Ouvert 7j/7 de 7h à 20h</p>
            <a href="mailto:contact@cafevintage.com" className="footer-email">
              contact@cafevintage.com
            </a>
          </div>
        </div>
        
        <div className="footer-divider">
          <p className="footer-copyright">© {new Date().getFullYear()} Café Vintage - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;