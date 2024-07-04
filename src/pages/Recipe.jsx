import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Recipe = () => {
  const { id } = useParams();

  const [rating, setRating] = useState(null);

  const handleRating = async (newRating) => {
    try {
      const response = await fetch(`/api/recipes/${id}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: newRating }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      setRating(newRating);
      toast("Rating submitted successfully!", {
        description: `You rated this recipe ${newRating} stars.`,
      });
    } catch (error) {
      toast.error("Error submitting rating", {
        description: error.message,
      });
    }
  };

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
          <section className="mb-4">
            <h2 className="text-2xl font-semibold">Rate this Recipe</h2>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant={rating === star ? "primary" : "outline"}
                  onClick={() => handleRating(star)}
                >
                  {star} Star{star > 1 && "s"}
                </Button>
              ))}
            </div>
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