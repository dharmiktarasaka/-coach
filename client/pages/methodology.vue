<template>
  <div class="narayan-subpage methodology-page">
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"><svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg></span>
      <div class="wrap">
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/about">About</NuxtLink> / Methodology</p>
        <p class="eyebrow">Our Methodology</p>
        <h1 style="margin-top:22px">Frameworks for <em>clarity</em> and <em>practice</em></h1>
        <p class="lead hero-in">
          The Narayan Presence uses two proprietary frameworks: P.A.U.S.E. for cognitive restructuring and emotional grounding, and N-A-R-A-Y-A-N for establishing an unshakeable daily conscious routine.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'About', to: '/about' },
        { label: 'Our Methodology' }
      ]"
      :prev="{ label: 'Founder Profile', to: '/founder' }"
      :next="{ label: 'Courses & Programmes', to: '/courses' }"
    />

    <!-- Framework 1: P.A.U.S.E. -->
    <section class="sec">
      <div class="wrap">
        <p class="eyebrow">P.A.U.S.E.</p>
        <h2 class="h2">Personal Awareness and <em>Conscious Response</em></h2>
        <p class="lead" style="max-width:700px;color:var(--body)">Five steps between an emotional trigger, an automatic thought, and a conscious decision.</p>

        <div class="mods" style="margin-top:36px">
          <div class="mod">
            <div class="no" style="font-size:54px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">P</div>
            <div>
              <h3 class="mod-title">Pause</h3>
              <p class="mod-text">Notice recurring thoughts, automatic reactions and mental loops as they arise.</p>
              <p class="mod-sub"><b style="color:#D9AA55">Ask:</b> What am I thinking right now, and for how long?</p>
              <p class="mod-sub"><b style="color:#D9AA55">Practise:</b> Keep a one-line log of the loop.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:54px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">A</div>
            <div>
              <h3 class="mod-title">Acknowledge</h3>
              <p class="mod-text">Recognise thoughts, emotions and somatic sensations without judging or suppressing them.</p>
              <p class="mod-sub"><b style="color:#D9AA55">Ask:</b> What am I feeling, and where do I feel it?</p>
              <p class="mod-sub"><b style="color:#D9AA55">Practise:</b> Name the feeling in one word.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:54px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">U</div>
            <div>
              <h3 class="mod-title">Understand</h3>
              <p class="mod-text">Explore triggers, interpretations, expectations, assumptions and core needs.</p>
              <p class="mod-sub"><b style="color:#D9AA55">Ask:</b> What happened, and what did I add?</p>
              <p class="mod-sub"><b style="color:#D9AA55">Practise:</b> Write facts on one side and the story on the other.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:54px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">S</div>
            <div>
              <h3 class="mod-title">Shift</h3>
              <p class="mod-text">Explore alternative perspectives and rehearse a more conscious, measured response.</p>
              <p class="mod-sub"><b style="color:#D9AA55">Ask:</b> What else could this mean, and what response would I stand by?</p>
              <p class="mod-sub"><b style="color:#D9AA55">Practise:</b> Rewrite the narrative and choose the next action.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:54px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">E</div>
            <div>
              <h3 class="mod-title">Establish</h3>
              <p class="mod-text">Create repeatable daily habits, clear boundaries, and grounded decisions.</p>
              <p class="mod-sub"><b style="color:#D9AA55">Ask:</b> What will I do this week, and when?</p>
              <p class="mod-sub"><b style="color:#D9AA55">Practise:</b> Anchor one specific habit and one decision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Framework 2: N-A-R-A-Y-A-N -->
    <section class="sec alt">
      <div class="wrap">
        <p class="eyebrow">N-A-R-A-Y-A-N</p>
        <h2 class="h2">A daily conscious and <em>grounded practice</em></h2>
        <p class="lead" style="max-width:700px;color:var(--body)">Seven short, repeatable practices designed for busy modern routines.</p>

        <div class="mods" style="margin-top:36px">
          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">N</div>
            <div>
              <h3 class="mod-title">Naam</h3>
              <p class="mod-text">A sacred name or anchoring phrase repeated for 3–5 minutes.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">A</div>
            <div>
              <h3 class="mod-title">Aabhar</h3>
              <p class="mod-text">Specific, detailed gratitude recorded daily.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">R</div>
            <div>
              <h3 class="mod-title">Reading</h3>
              <p class="mod-text">A brief passage of contemplative wisdom or practical philosophy.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">A</div>
            <div>
              <h3 class="mod-title">Anulom-Vilom</h3>
              <p class="mod-text">Gentle, alternate-nostril breathwork to balance the nervous system.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">Y</div>
            <div>
              <h3 class="mod-title">Yoga</h3>
              <p class="mod-text">Mindful posture, stretching, and somatic release adapted to your body.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">A</div>
            <div>
              <h3 class="mod-title">Affirmation</h3>
              <p class="mod-text">One honest, grounded sentence chosen to govern your day.</p>
            </div>
          </div>

          <div class="mod">
            <div class="no" style="font-size:46px;line-height:1;color:#D9AA55;font-family:'Fraunces',serif">N</div>
            <div>
              <h3 class="mod-title">Nek Kaam</h3>
              <p class="mod-text">One intentional, anonymous kind act performed for another person.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="sec">
      <div class="wrap">
        <p class="eyebrow">Side by side</p>
        <h2 class="h2">How the frameworks <em>differ</em></h2>
        <div class="tw" style="margin-top:30px;overflow-x:auto;-webkit-overflow-scrolling:touch">
          <table class="table method-table" style="width:100%;min-width:580px;border-collapse:collapse;border-radius:18px;overflow:hidden;border:1px solid var(--line)">
            <thead>
              <tr style="background:#171848;color:#F8D78B;text-align:left">
                <th style="padding:16px 20px;font-size:14px;border-bottom:1px solid rgba(217,170,85,0.3)">Dimension</th>
                <th style="padding:16px 20px;font-size:14px;border-bottom:1px solid rgba(217,170,85,0.3)">P.A.U.S.E.</th>
                <th style="padding:16px 20px;font-size:14px;border-bottom:1px solid rgba(217,170,85,0.3)">N-A-R-A-Y-A-N</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-row">
                <td class="table-head-col">Purpose</td>
                <td class="table-col">Deconstruct a recurring loop and choose an intentional response</td>
                <td class="table-col">Anchor an unshakeable, grounded daily morning rhythm</td>
              </tr>
              <tr class="table-row">
                <td class="table-head-col">Trigger Point</td>
                <td class="table-col">When an overthinking loop, emotion or tough decision arises</td>
                <td class="table-col">Every day upon waking, before interacting with the world</td>
              </tr>
              <tr class="table-row">
                <td class="table-head-col">Structure</td>
                <td class="table-col">5 investigative steps with worksheets</td>
                <td class="table-col">7 short physical, mental and spiritual rituals</td>
              </tr>
              <tr class="table-row">
                <td class="table-head-col">Core Programmes</td>
                <td class="table-col">Clear Mind, Emotional Awareness, Conscious Relationships</td>
                <td class="table-col">N-A-R-A-Y-A-N Daily Practice, 21-Day Conscious Living</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Experience these frameworks <em>in action.</em></h2>
        <p class="lead">Both methods are embedded across our Academy and Business programmes.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/#programmes">Explore All Programmes <span>→</span></NuxtLink>
          <NuxtLink class="btn btn-line" style="color:#F8F5EF" to="/founder">Meet Ranu Patel</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Our Methodology · The P.A.U.S.E. Method & N-A-R-A-Y-A-N Rhythm',
  meta: [
    { name: 'description', content: 'Discover the proprietary P.A.U.S.E. approach (Pause, Acknowledge, Understand, Shift, Establish) and the N-A-R-A-Y-A-N daily rhythm for emotional resilience and clarity.' },
    { property: 'og:title', content: 'The P.A.U.S.E. Framework & N-A-R-A-Y-A-N Daily Rhythm | The Narayan Presence' },
    { property: 'og:description', content: 'A grounded, evidence-informed framework for shifting from reactive stress to conscious choice.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'The P.A.U.S.E. Method for Mental Clarity',
        'description': 'A 5-step evidence-based practice to interrupt cognitive looping and choose conscious responses.',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Pause',
            'text': 'Catch the thought loop while running without judgment.'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Acknowledge',
            'text': 'Name emotions and bodily sensations without suppressing them.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Understand',
            'text': 'Separate what happened from the narrative and expectations added.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Shift',
            'text': 'Reframe perspectives and choose an intentional response over a reaction.'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Establish',
            'text': 'Anchor what works into daily routine and sustainable decisions.'
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}
.narayan-subpage h1,
.narayan-subpage h2,
.narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

.mod-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 24px;
  color: var(--fg);
}
:root[data-theme="dark"] .mod-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .mod-title {
  color: #171848 !important;
}

.mod-text {
  margin-top: 6px;
  color: var(--body);
}
:root[data-theme="dark"] .mod-text {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .mod-text {
  color: #4A4B68 !important;
}

.mod-sub {
  margin-top: 6px;
  color: var(--body);
}
:root[data-theme="dark"] .mod-sub {
  color: #c4c4e2 !important;
}
:root[data-theme="light"] .mod-sub {
  color: #3a3753 !important;
}

/* Table Styling */
.method-table {
  background: var(--card);
}
:root[data-theme="dark"] .method-table {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .method-table {
  background: #ffffff;
  border-color: #EAE2D4;
}

.table-row {
  border-bottom: 1px solid var(--line);
}

.table-head-col {
  padding: 16px 20px;
  font-weight: 700;
  color: var(--fg);
}
:root[data-theme="dark"] .table-head-col {
  color: #F8D78B !important;
}
:root[data-theme="light"] .table-head-col {
  color: #171848 !important;
}

.table-col {
  padding: 16px 20px;
  color: var(--body);
}
:root[data-theme="dark"] .table-col {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .table-col {
  color: #4A4B68 !important;
}
</style>
