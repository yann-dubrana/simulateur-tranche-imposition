<script>import "../app.css";
import {Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";</script>

<Navbar fluid>
    <NavBrand href="/">
        <img src="/images/logo.jpg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Simulateur tranche imposition</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl>
        <NavLi href="/">Accueil</NavLi>
        <NavLi href="/about">A Propos</NavLi>
    </NavUl>
</Navbar>
<slot></slot>