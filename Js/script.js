// Obtener el formulario
const formulario = document.getElementById("formularioCotizacion");

// Evento al enviar (solo si el formulario existe en esta página)
if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const asunto = document.getElementById("asunto").value;
        const descripcion = document.getElementById("descripcion").value.trim();

        const toastEl = document.getElementById("toastFormulario");
        const toastMensaje = document.getElementById("toastMensaje");
        const toast = new bootstrap.Toast(toastEl);

        if (nombre === "" || correo === "" || asunto === "" || descripcion === "") {
            toastEl.classList.add("toast-error");
            toastMensaje.textContent = "Por favor completa todos los campos.";
            toast.show();
            return;
        }

        // Mostrar spinner y deshabilitar botón
        const btnEnviar = document.getElementById("btnEnviar");
        const btnTexto = document.getElementById("btnEnviarTexto");
        const btnSpinner = document.getElementById("btnEnviarSpinner");

        btnTexto.classList.add("d-none");
        btnSpinner.classList.remove("d-none");
        btnEnviar.disabled = true;

        // Simula tiempo de envío
        setTimeout(function () {
            btnTexto.classList.remove("d-none");
            btnSpinner.classList.add("d-none");
            btnEnviar.disabled = false;

            toastEl.classList.remove("toast-error");
            toastMensaje.textContent = "Solicitud enviada correctamente. Nos comunicaremos contigo pronto.";
            toast.show();

            formulario.reset();
        }, 1500);
    });
}

// Animación de contador jQuery
$(document).ready(function () {
    $('.contador-numero').each(function () {
        const $this = $(this);
        const target = parseInt($this.data('target'));

        $({ count: 0 }).animate({ count: target }, {
            duration: 2000,
            step: function () {
                $this.text(Math.floor(this.count));
            },
            complete: function () {
                $this.text(target + '+');
            }
        });
    });
});

// Inicializar tooltips de Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// Filtro de galería
$(document).ready(function () {
    $('.galeria-filtro-btn').on('click', function () {
        $('.galeria-filtro-btn').removeClass('active');
        $(this).addClass('active');

        const filtro = $(this).data('filtro');

        if (filtro === 'todos') {
            $('.galeria-item').fadeIn(400);
        } else {
            $('.galeria-item').each(function () {
                if ($(this).data('categoria') === filtro) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(200);
                }
            });
        }
    });
});

// Lightbox de galería
$(document).ready(function () {
    $('.galeria-foto').on('click', function () {
        const src = $(this).attr('src');
        $('#lightboxImg').attr('src', src);
    });
});