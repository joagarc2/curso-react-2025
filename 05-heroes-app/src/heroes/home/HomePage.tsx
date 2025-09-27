import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "../../components/custom/CustomJumbotron";
import { HeroStats } from "../components/HeroStats";
import { HeroGrid } from "../components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "../../components/custom/CustomPagination";
import { CustomBreadCrumb } from "../../components/custom/CustomBreadCrumb";
import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";
import { useSearchParams } from "react-router";

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  const {data: heroesResponse} = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 600 * 5,
  });

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHéroes"
          description="Descubre, explora y administra superheroes y villanos"
        />

        <CustomBreadCrumb currentPage="1"/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favorites</h1>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villains</h1>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
