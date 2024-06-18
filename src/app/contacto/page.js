import './page.css';
import Button from '@/components/Button/Button';
import FormInput from '@/components/FormInput/FormInput';

const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contacto</h1>
      <p>
        ¿Tienes alguna pregunta o inquietud? ¡No dudes en ponerte en contacto
        con nosotros! Completa el formulario a continuación y nos pondremos en
        contacto contigo lo antes posible.
      </p>

      <form>
        <FormInput
          label="Nombre"
          type="text"
          name="nombre"
          placeholder="Nombre"
        />
        <FormInput label="Email" type="text" name="email" placeholder="Email" />
        <label>Mensaje</label>
        <textarea name="mensaje" className="u-full-width"></textarea>
        <Button clase="u-full-width button-primary" texto="Enviar" />
      </form>
    </div>
  );
};

export default Contacto;
