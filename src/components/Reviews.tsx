import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Sara Sutton",
    rating: 5,
    text: "Ben was incredibly professional and after a long time of neck and back issues I had instant results — the convenience of him coming to my home was wonderful — I can not recommend him enough — thank you Ben",
  },
  {
    name: "Zoe Hewitt",
    rating: 5,
    text: "I can't recommend Ben enough. He is professional and very knowledgeable, he explains each step of the treatment in detail and puts you at ease. Ben then explains what your treatment plan will look like moving forward! I feel the benefits already! I have recommended him to friends and family.",
  },
  {
    name: "Kate Capes",
    rating: 5,
    text: "I can not recommend Ben more highly! He is so knowledgeable and professional. I have had ongoing neck and shoulder issues for years and I can not believe the range of movement I have now. Ben explained everything he was doing and what is going on anatomically and has provided me with exercises to do in between sessions. So pleased.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarRating rating={5} />
            <span className="text-muted-foreground text-sm font-medium">
              5.0 on Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm card-hover flex flex-col"
            >
              <StarRating rating={review.rating} />
              <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-6 flex-1">
                "{review.text}"
              </p>
              <p className="font-serif font-semibold text-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.co/kgs/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors"
          >
            See all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
