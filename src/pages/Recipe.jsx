import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Recipe = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <CardHeader>
          <CardTitle className="text-3xl">Recipe Title {id}</CardTitle>
          <p className="text-muted-foreground">by Author Name</p>
        </CardHeader>
        <CardContent>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold">Ingredients</h2>
            <ul className="list-disc list-inside">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <ol className="list-decimal list-inside">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Comments</h2>
            <p className="text-muted-foreground">No comments yet.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recipe;