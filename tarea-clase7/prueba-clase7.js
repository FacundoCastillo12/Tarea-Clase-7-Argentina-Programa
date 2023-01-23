function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
  }
  
  function probarValidarCiudad() {
      console.assert(
          validarCiudad('') === 'Tienes que selecionar una ciudad', 
          'Validar ciudad no ha validado que el nombre de ciudad no este vacio',
      );
  }
  
  function probarValidarDescripcionesRegalo() {
      console.assert(
          validarDescripcionRegalo('') === 'Este campo no tiene que estar vacio', 
          'Validar descripciones-regalo no ha validado que el campo no este vacio',
      );
      console.assert(
          validarDescripcionRegalo('fjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjfjf') === 
          'Este campo debe tener menos de 100 caracteres', 
          'Validar descripcion-regalo no ha validado que el campo tenga menos de cien caracteres',
      );
  }

  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionesRegalo();

  