// Ese aqui muda a interface para funcionar em outros dispositivos
$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });


    const sections = $('section');
    const navItems = $('.nav-item');

    $(document).ready(function () {
        const navItems = $('#nav_list .nav-item');
        const navList = $('#nav_list');
        const line = $('#navbar .line'); // Linha de destaque

        // Evento de clique nos links de navegação
        navItems.find('a').on('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            const targetId = $(this).attr('href'); // Pega o ID da seção alvo
            const targetSection = $(targetId);
            const offset = targetSection.offset().top - 80; // Ajuste adicional, se necessário

            // Scroll suave até a seção alvo
            $('html, body').animate({
                scrollTop: offset
            }, 600);
        });

        // Evento de rolagem para destacar a seção visível
        $(window).on('scroll', function () {
            const scrollPosition = $(window).scrollTop();
            
            let activeIndex = 0;
        
            // Atualiza o índice ativo baseado nas novas posições de rolagem
            if (scrollPosition < 308.555) { 
                activeIndex = 0;
            } else if (scrollPosition >= 408.555 && scrollPosition < 1153) {
                activeIndex = 1;
            } else if (scrollPosition >= 1153) {
                activeIndex = 2;
            }
        
            navItems.removeClass('active');
            $(navItems[activeIndex]).addClass('active');
        
            // Atualiza a posição da linha de destaque
            const activeNavItem = $(navItems[activeIndex]);
            const itemOffset = activeNavItem.offset().left - navList.offset().left;
            const itemWidth = activeNavItem.outerWidth();
        
            $('.line').css({
                left: itemOffset,
                width: itemWidth
            });
        
            // Remove a sombra do header quando a rolagem estiver na coordenada zero
            if (scrollPosition === 0) {
                $('header').css('box-shadow', 'none');
            } else {
                $('header').css('box-shadow', '0 0 12px 4px rgba(0, 0, 0, 0.06)');
            }
        });
        
        // Inicializa a linha de destaque no carregamento da página
        const initialActiveNavItem = $('#nav_list .nav-item.active');
        if (initialActiveNavItem.length) {
            const itemOffset = initialActiveNavItem.offset().left - navList.offset().left;
            const itemWidth = initialActiveNavItem.outerWidth();

            $('.line').css({
                left: itemOffset,
                width: itemWidth
            });
        }
    });
});

// Esse faz favoritar os pratos
function toggleHeart(element) {
    element.classList.toggle('favorited');
    element.closest('.dish-card').classList.toggle('favorited');
}

//Esse faz aparecer uma pequena caixa de texto ao lado do mouse assim que ele passa por cima de algo
document.querySelectorAll('.hover-element').forEach(function (element) {
    element.addEventListener('mousemove', function (e) {
        const tooltip = this.querySelector('::after');
        tooltip.style.top = e.clientY + 10 + 'px';
        tooltip.style.left = e.clientX + 10 + 'px';
    });
});