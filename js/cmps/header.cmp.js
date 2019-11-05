'use strict'

export default {
    template: `
        <header>
            <h1>Miss Book</h1>
            <nav>
                <router-link to="/">Homepage</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/book" exact>Book-List</router-link> |
            </nav>
        </header>
    `,
}