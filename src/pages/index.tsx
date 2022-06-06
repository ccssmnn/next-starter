import {
  CodeIcon,
  EyeIcon,
  HeartIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "NextJS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "TypeScript",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CodeIcon,
  },
  {
    name: "TailwindCSS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HeartIcon,
  },
  {
    name: "Prettier",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: EyeIcon,
  },
];

export default function Home() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-8">
        <div className="laptop:text-center">
          <h1 className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
            Starter
          </h1>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight tablet:text-4xl">
            Next.js & TailwindCSS & More
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-200 laptop:mx-auto">
            Avoid setting up all the tooling and theming by yourself.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 laptop:grid laptop:grid-cols-2 laptop:gap-x-8 laptop:gap-y-10 laptop:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
