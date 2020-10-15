class Uri {
    constructor(url, route) {
        this.url = url;
        this.route = route || url;
    }

    getRoute() {
        return this.route
    }

    getPathAndQuery() {
        return this.url
    }

    getPath() {
        // TODO : remove querystring and return path
        return this.url
    }

    getAbsoulteUri() {
        return process.env.DOMAIN + this.url;
    }
}

class Paths {

    static home = new Uri('/')
    
    static signin = new Uri('/signin')

    static signup = new Uri('/signup')

    static plazaPlus = new Uri('/plus')

    static plazaMag = new Uri('/mag')

    static faq = new Uri('/faq')

    static club = class {
        static base = "/club"

        static home = new Uri(this.base)
    }

    static profile = class {
        static base = "/profile"

        static home = new Uri(this.base)
        static orders = new Uri(this.base + '/orders')
    }

    static product = class {
        static detail (id) { 
            return new Uri(`/product/${id}`,'/product/:id')
        };

        static search () {
            return new Uri('/search');
        }
    }

    static brand = class {
        static home = new Uri('/brands')
    }

    static about = new Uri('/about')

    static contact = new Uri('/contact')

}




export default Paths