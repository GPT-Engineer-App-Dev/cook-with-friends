import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Recipe Share</h1>
        <p className="text-lg text-muted-foreground">Discover and share amazing recipes from around the world.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title</CardTitle>
              <CardDescription>Short description of the recipe.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title</CardTitle>
              <CardDescription>Short description of the recipe.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Recipe Title</CardTitle>
              <CardDescription>Short description of the recipe.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Recipes</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <Link to="/recipe/1" className="text-xl font-semibold">Recipe Title</Link>
              <p className="text-muted-foreground">Short description of the recipe.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Link to="/recipe/2" className="text-xl font-semibold">Recipe Title</Link>
              <p className="text-muted-foreground">Short description of the recipe.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Link to="/recipe/3" className="text-xl font-semibold">Recipe Title</Link>
              <p className="text-muted-foreground">Short description of the recipe.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;