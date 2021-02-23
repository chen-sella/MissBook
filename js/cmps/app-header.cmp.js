export default {
  template: `
        <header class="app-header">
        <div class="header-content-container main-container">
            <div class="logo">
                <h1>Miss Book</h1>
            </div>
            <nav>
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/book">Books</router-link>
            </nav>
        </div>
        </header>    
    `,
};
