import React, { forwardRef } from "react";

// Define the props type for the Section component
interface SectionProps {
  id: string;
  title: string;
  description: string[] | React.ReactNode; // Accepts multiple paragraphs or nodes
  extraContent?: React.ReactNode;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, title, description, extraContent }, ref) => (
    <section
      ref={ref}
      id={id}
      className="flex flex-col items-start p-10 w-full"
    >
      <h2 className="text-4xl font-bold mb-12">{title}</h2>
      <div className="content opacity-0 translate-y-4 transition-all duration-700 ease-out w-full">
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p key={index} className="max-w-xl mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="max-w-xl mb-6">{description}</p>
        )}
        {extraContent && (
          <div className="mt-6 w-full max-w-4xl">{extraContent}</div>
        )}
      </div>
    </section>
  )
);

Section.displayName = "Section";

export default Section;
