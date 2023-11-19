<template>
    <main>
        <div class="page-description">
            <div class="im-no-jr-alert">
                <em>
                    Because this application is so simple, I didn't see the need to create separate
                    components for the views, nor did the need arise for using lifecycle hooks.
                </em>
            </div>
            <p>
                This is a simple SPA I wrote to show at the interview with <span class="byte5">byte5</span>. It's meant to show
                my enthusiasm for the Frontend position I'm applying for, and to show that I'm
                motivated, proactive, and that I can learn quickly.
            </p>
            <p>
                I learnt <span class="vue">Vue</span> only yesterday (16.11 - Interview was on 17.11), but due to my
                experience with React and Angular, I can see where Vue took inspiration from and can
                quickly understand how to do things.
            </p>
            <p>
                This app is not meant to show best practices, the cleanest code, or the best
                programming logic or styling. It was made purely with two ideas in mind: show my
                enthusiasm, start learning <span class="vue">Vue</span>.
            </p>
            <p>
                I'm super excited about this position, as I believe the ethos of the company (as I
                could read in the job description, the company's page, as well as in the videos on
                the Youtube channel) super reverberate with me.
            </p>
            <p>
                I don't usually make a whole application for each job interview, but for
                <span class="byte5">byte5</span> it felt different, and that's why I made this simple SPA.
            </p>
            <p>Thanks for visiting. =)</p>
        </div>
    </main>
</template>

<style>
.page-description {
    font-family: 'AvenirNext';
    margin: 2rem 5rem;
}

.im-no-jr-alert {
    background-color: rgb(250, 145, 107);
    color: white;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
}

.byte5 {
    font-family: 'DaysOne';
    color: var(--blue);
}

.vue {
    font-weight: bold;
    color: var(--vue-green);
}

@media screen and (max-width: 740px) {
    .page-description {
        margin: 0 1rem;
    }
}
</style>
