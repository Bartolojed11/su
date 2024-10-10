<template>
    <div class="tw-container">
        <!-- Top section -->
        <section
            class="tw-relative tw-h-[60vh] tw-bg-cover tw-bg-center tw-bg-no-repeat before:tw-absolute before:tw-left-0 before:tw-top-0 before:tw-h-full before:tw-w-full before:tw-bg-black before:tw-opacity-50"
            style="
                background-image: url(&quot;/images/backgrounds/sp-collaboration.jpg&quot;);
            "
        >
            <div class="tw-absolute tw-bottom-12 tw-p-4 tw-text-white">
                <p
                    class="tw-mb-3 tw-flex tw-flex-row tw-gap-6 tw-text-3xl tw-uppercase"
                >
                    Graphics. Web. Digital
                </p>
                <p class="tw-mb-4 tw-text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque molestias suscipit doloribus exercitationem nesciunt
                    placeat ducimus iusto, omnis asperiores, neque nobis
                    inventore at. Dolore rem sed amet sint magnam deleniti!
                </p>
                <LinkBtn
                    class="tw-bg-main tw-uppercase tw-leading-9 tw-text-white"
                    :url="'#'"
                    :label="'Explore work'"
                />
            </div>
        </section>
        <!-- Core services -->
        <section class="tw-my-16 tw-px-4">
            <p class="tw-mb-2 tw-text-3xl tw-uppercase">What we do</p>
            <i class="tw-text-lg tw-font-light">We build digital solutions</i>
            <div class="tw-mt-4 tw-flex tw-flex-col tw-gap-4">
                <Card
                    v-for="(offering, index) in core_offerings"
                    :key="index"
                    :props="formatCoreOfferings(offering)"
                    class=""
                >
                    <font-awesome-icon
                        :icon="offering.icon"
                        class="tw-mb-6 tw-text-4xl"
                    />
                </Card>
            </div>
        </section>
        <!-- Another cta  -->
        <section
            class="tw-relative tw-my-16 tw-h-96 tw-bg-cover tw-bg-center tw-bg-no-repeat before:tw-absolute before:tw-left-0 before:tw-top-0 before:tw-h-full before:tw-w-full before:tw-bg-black before:tw-opacity-50"
            style="
                background-image: url(&quot;/images/backgrounds/cta-bg.jpg&quot;);
            "
        >
            <div
                class="rw-border-y-2 tw-absolute tw-left-0 tw-right-0 tw-h-full"
            >
                <div
                    class="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-text-white"
                >
                    <p class="tw-mb-4 tw-text-2xl tw-font-light tw-uppercase">
                        Best ever design
                    </p>
                    <p class="tw-mb-4 tw-text-xl">
                        Time to enhance your web presence!
                    </p>
                    <LinkBtn
                        class="tw-bg-main tw-uppercase tw-text-white"
                        :url="'/#'"
                        :label="'Get Quotation'"
                    />
                </div>
            </div>
        </section>
        <!-- The work section -->
        <section>
            <p
                class="tw-my-8 tw-mb-4 tw-px-4 tw-text-center tw-text-3xl tw-uppercase"
            >
                The work
            </p>
            <div
                class="tw-my-8 tw-flex tw-items-center tw-justify-center tw-gap-4 tw-px-4"
            >
                <button
                    v-for="(item, key) in workSamplesCategories"
                    :key="item"
                    @click="filterWorkSamples(key)"
                    type="button"
                >
                    {{ item }}
                </button>
            </div>

            <div class="tw-flex tw-flex-col tw-gap-2">
                <img
                    class="tw-h-80 tw-w-full tw-object-cover tw-object-center"
                    v-for="item in workSamples"
                    :key="item.alt"
                    :src="item.link"
                    :alt="item.alt"
                />
            </div>
        </section>
        <!-- The team section -->
        <section class="tw-my-16 tw-px-4">
            <p class="tw-mb-4 tw-text-3xl tw-uppercase">Who we are</p>
            <i class="tw-mb-4 tw-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                fugiat dolores cumque odio ut debitis eum optio.
            </i>
            <img
                class="tw-mb-4 tw-h-72 tw-w-full tw-bg-no-repeat tw-object-cover tw-object-center"
                src="/images/team-1.png"
                alt="First part of team"
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis blanditiis, similique iure inventore laborum optio qui
                harum dolores quia necessitatibus distinctio provident excepturi
                corrupti amet voluptatibus, eum, modi ut quibusdam?
            </p>
        </section>

        <!-- Achievements section -->
        <section
            class="tw-relative tw-my-16 tw-h-[790px] tw-bg-cover tw-bg-center before:tw-absolute before:tw-left-0 before:tw-top-0 before:tw-h-full before:tw-w-full before:tw-bg-black before:tw-opacity-50"
            style="
                background-image: url(&quot;/images/backgrounds/sp-collaboration.jpg&quot;);
            "
        >
            <div
                class="tw-absolute tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-text-white"
            >
                <div
                    class="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-py-8"
                    v-for="(item, index) in achievements"
                    :key="index"
                >
                    <font-awesome-icon
                        :icon="item.icon"
                        class="tw-mb-4 tw-text-5xl"
                    />
                    <p class="tw-mb-2 tw-text-xl">{{ item.numbers }}</p>
                    <p class="tw-uppercase">{{ item.label }}</p>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="tw-my-16 tw-px-4 tw-text-center">
            <p class="tw-mb-2 tw-text-xl tw-uppercase">Hear From</p>
            <p class="tw-mb-4 tw-text-3xl tw-font-bold tw-uppercase">
                testimonials
            </p>
            <i class="tw-mb-2">We always listen to our clients.</i>

            <div
                class="tw-mt-10"
                v-for="(testimonial, index) in testimonials"
                :key="index"
            >
                <div
                    class="tw-mx-auto tw-w-40 tw-overflow-hidden tw-rounded-full"
                >
                    <img
                        class="tw-bg-no-repeat tw-object-cover"
                        :src="testimonial.image"
                        :alt="testimonial.name"
                    />
                </div>
                <p
                    class="tw-mb-2 tw-mt-6 tw-text-3xl tw-font-light tw-text-main"
                >
                    {{ testimonial.name }}
                </p>
                <p class="tw-mb-6 tw-text-xs tw-uppercase">
                    {{ testimonial.position }} - {{ testimonial.company }}
                </p>
                <p class="tw-font-light">
                    {{ testimonial.testimonial }}
                </p>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import core_offerings from "~/assets/json/what-we-do.json";
import portofolio from "~/assets/json/work-samples.json";
import achievements from "~/assets/json/achievements.json";
import testimonials from "~/assets/json/testimonials.json";

interface Offerings {
    title: string;
    icon: string[];
    description: string;
    link?: string;
    link_label?: string;
}

interface WorkSamples {
    link: string;
    alt: string;
    category: string;
}

const workSamplesCategories = {
    all: "All",
    web_development: "Web Development",
    ui_ux: "UI/UX",
    photography: "Photography",
};

const workSamples: Ref<WorkSamples[]> = ref(portofolio.slice(0, 3));

let filterWorkSamples = (item: string) => {
    if (item === workSamplesCategories.all.toLowerCase()) {
        workSamples.value = portofolio;
        return;
    }

    workSamples.value = portofolio.filter(
        (samples) => samples.category === item,
    );
};

let formatCoreOfferings = (data: Offerings) => {
    return {
        title: data.title,
        icon: data.icon,
        description: data.description,
        url: data.link,
        urlLabel: data.link_label,
    };
};
</script>
