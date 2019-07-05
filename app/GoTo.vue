<template>
    <a href="!#" @click.prevent="goTo" class="go-to router-link" :class="_activeClass">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'goTo',
    props: { 
        to: String, // Имя роута
        activeClass: String
    }, 
    data() {
        return {
            matcher: this.$router.matcher.match,
        }
    },
    computed: {
        _isActive() {
            let active = false;
            let match = this.matcher(this.$route).matched[0];

            if(match !== undefined && match.name === this.to) {
                active = true;
            }

            return active;
        },
        _activeClass() {
            let className = '';
            if(this._isActive) className = this.activeClass || 'router-link-active';
            
            return className;
        }
    },
    methods: {
        // Очищает path часть url от адреса роутов
        clearPath(path) {
            let match = this.matcher(path).matched[0];
            // Если есть совпадение с каким-либо роутом, разбиваем path по / 
            // и отбрасываем последний элемент path (наш предыдущий роут)
            if(match !== undefined) {
                path = path.split('/');
                path = path.slice(0, 1 - path.length).join('/');
            }

            // Возвращаем только path самого сайта
            return path;
        },
		goTo() {
            let routeName = this.to; // Имя роута из пропс
			let page = ''; // path часть url самого сайта(VK)
            let query = {}; // GET-параметры самого сайта(VK)

            // Пока это заточено только под VK
            // nav - роутер VK
            // В nav.objLoc объект, описывающий составляющие текущего url
			if(window.nav && window.nav.objLoc) {
                query = Object.assign({}, window.nav.objLoc);
                // query[0] - это path часть url
				if(query[0] !== undefined) {
                    // Очищаем path от предыдущего роута
                    page = this.clearPath(query[0]);
                    
                    // И удаляем path из объекта локации, чтобы в нем остались только GET-параметры
					delete query[0];
				}
			}

			let route = {
				name: routeName, // Имя роута, на который переходим
				params: { page }, // path страницы VK
				query // GET-параметры страницы VK
			};			

            // Переход на нужный роут
            this.$router.replace(route);
        }
    }
}
</script>
