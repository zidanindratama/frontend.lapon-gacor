
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  import { HeartHandshake, Users2, Scale } from "lucide-react";
const FeatureCards = () => {
    const features = [
      {
        icon: <HeartHandshake className="w-16 h-16 text-emerald-600" />,
        title: "Holistic approach",
        description:
          "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
      },
      {
        icon: <Users2 className="w-16 h-16 text-white" />,
        title: "Expertise Team",
        description:
          "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
      },
      {
        icon: <Scale className="w-16 h-16 text-emerald-600" />,
        title: "Accessibility",
        description:
          "Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.",
      },
    ];
  
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border rounded-3xl overflow-hidden ${
                index === 1 ? "bg-gradient-to-r from-greenSecondary to-greenPrimary text-white lg:h-96 h-auto order-first lg:order-none" : "bg-white"
              }`}
            >
              <CardHeader className="flex items-center justify-center pt-8">
                <div className="rounded-full p-4">{feature.icon}</div>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardTitle className="text-xl mb-4 font-semibold">
                  {feature.title}
                </CardTitle>
                <CardDescription
                  className={index === 1 ? "text-gray-200" : "text-gray-500"}
                >
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  

  export default FeatureCards;