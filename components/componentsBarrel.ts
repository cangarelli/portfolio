// Portfolio module

/* Narrative Branch */
export { default as NarrativeModel } from "./portfolioModule/narrativeBranch/Modelo";
export { default as Narrative } from "./portfolioModule/narrativeBranch/Negocio";
export { default as NarrativesColumn } from "./portfolioModule/narrativeBranch/Vista";

/* Proyects Branch */
export { default as ProyectsModule } from "./portfolioModule/proyectsBranch/Module";
export { default as Proyects } from "./portfolioModule/proyectsBranch/Negocio";
export { default as ProyectsCard } from "./portfolioModule/proyectsBranch/Vista";

/* Welcome Branch */
export { default as WelcomeModule } from "./portfolioModule/welcomeBranch/Module";
export { default as Welcome } from "./portfolioModule/welcomeBranch/Negocio";
export { default as WelcomeIlustration } from "./portfolioModule/welcomeBranch/Vista";

export { default as Hero } from "./serviceModule/BrandingBranch/Hero";

// Service Module
/* Nav Bar Branch */
export { default as NavBarModule } from "./serviceModule/NavBarBranch/Module";
export { default as NavBar } from "./serviceModule/NavBarBranch/Negocio";
export { default as NavBarButtonPad } from "./serviceModule/NavBarBranch/Vista";

/* Branding Branch */
export { default as BrandingLogo } from "./serviceModule/BrandingBranch/BrandingLogo";
export { default as Typography } from "./serviceModule/BrandingBranch/Typography";
export { default as DefuseBanner } from "./serviceModule/BrandingBranch/DefuseBanner";

/* Button Branch */
export { default as ButtonGlobal } from "./serviceModule/ButtonBranch/ButtonGlobal";
export { default as DropDown } from "./serviceModule/ButtonBranch/DropDown";
