<script>import "../app.css";
import {
    Footer,
    FooterCopyright, FooterIcon,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl
} from "flowbite-svelte";
import {GithubSolid} from "flowbite-svelte-icons";
import {inject} from '@vercel/analytics'
import {injectSpeedInsights} from '@vercel/speed-insights/sveltekit';

inject();
injectSpeedInsights();
</script>

<div class="flex flex-col h-screen">
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

    <div class="grow">
        <slot></slot>
    </div>


    <div>
        <Footer class="py-6 px-4 md:flex md:items-center md:justify-between ">
            <FooterCopyright href="/" by="Yann Dubrana" year={2024}
                             copyrightMessage=' - Fièrement propulsé par Svelte 5'/>

            <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
                <FooterIcon href="https://github.com/yann-dubrana/simulateur-tranche-imposition">
                    <GithubSolid
                            class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"/>
                </FooterIcon>
            </div>
        </Footer>
    </div>
</div>
