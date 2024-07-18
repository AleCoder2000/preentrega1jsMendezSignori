
function jugarAdivinaEfemeride() {
    const efemerides = [
        { nombre: "Freddie Mercury", anio: 1946 },
        { nombre: "Elvis Presley", anio: 1935 },
        { nombre: "Michael Jackson", anio: 1958 },
        { nombre: "Madonna", anio: 1958 },
        { nombre: "John Lennon", anio: 1940 },
        { nombre: "Whitney Houston", anio: 1963 },
        { nombre: "Prince", anio: 1958 },
        { nombre: "David Bowie", anio: 1947 },
        { nombre: "Amy Winehouse", anio: 1983 },
        { nombre: "Kurt Cobain", anio: 1967 }
    ];
    
    for (const efemeride of efemerides) {
        let intentos = 0;
        let adivinado = false;

        while (!adivinado) {
            const intento = parseInt(prompt(`Año de nacimiento de ${efemeride.nombre}?`));
            intentos++;

            if (intento === efemeride.anio) {
                alert(`¡Felicitaciones! El año es ${efemeride.anio}. Lo adivinaste en ${intentos} intentos.`);
                adivinado = true;
            } else if (intento < efemeride.anio) {
                if (efemeride.anio - intento <= 5) {
                    alert("Estás cerca, andá un poco más para arriba");
                } else {
                    alert("El año es más alto! Intentá de nuevo.")
                }
            } else {
                if (intento - efemeride.anio <= 5) {
                    alert("Estás cerca, andá un poco más para abajo");
                } else {
                    alert("El año es más bajo! Intentá de nuevo.")
                }
            }
        }
    }
}

jugarAdivinaEfemeride();
