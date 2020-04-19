import { useEffect, useState, useRef } from "react";

export default function useNearScreen() {
  //con ref se captura el elemento del dom
  const element = useRef(null);
  const [show, setShow] = useState(false);

  //useEffect para ver si los elementos del listado se estan mostrando en pantalla
  //se crea lazy loading para no cargar todas las imagenes de manera innecesaria, sino solo las imagenes que se ven
  useEffect(
    function () {
      //promesa para saber si window.IntersectionObserver es o no soportado por el navegador
      Promise.resolve(
        typeof window.IntersectionObserver !== undefined
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];

          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });

        observer.observe(element.current);
      });
    },
    [element]
  );

  return [show, element];
}
