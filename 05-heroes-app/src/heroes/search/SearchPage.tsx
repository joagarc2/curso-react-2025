import { CustomBreadCrumb } from "../../components/custom/CustomBreadCrumb";
import { CustomJumbotron } from "../../components/custom/CustomJumbotron";
import { HeroStats } from "../components/HeroStats";
import { SearchControls } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Universo de SuperHéroes"
        description="Descubre, explora y administra superheroes y villanos"
      />
      <CustomBreadCrumb currentPage="Buscador de heroes" breadcrumbs={
        [
          {label: 'Home1', to: '/'}
        ]
      }/>
      <HeroStats/>
      <SearchControls/>
    </>
  );
};

export default SearchPage;
