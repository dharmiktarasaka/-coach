<template>
  <div class="narayan-subpage article-detail-page">
    <!-- Hero Article Header -->
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true">
        <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg>
      </span>
      <div class="wrap">
        <p class="crumb">
          <NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/blog">Blog</NuxtLink> / Can AI Replace Human Coaches?
        </p>

        <div class="flex items-center gap-2.5 flex-wrap">
          <span class="brand-category-pill">
            Mental Clarity / Coaching Insights
          </span>
          <span class="text-xs text-[#EAE2D4]/75 flex items-center gap-1 font-medium">
            <svg class="w-3.5 h-3.5 text-[#D9AA55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            7 min read
          </span>
          <span class="text-xs text-[#EAE2D4]/40">&bull;</span>
          <span class="text-xs text-[#D9AA55] font-semibold tracking-wide">Research Edition &bull; 2026</span>
        </div>

        <h1 class="hero-article-title">
          Can AI Replace Human Coaches? <em>What the Research Shows</em> About AI Life Coaching
        </h1>

        <p class="lead hero-in">
          AI matched human coaches on goal-setting in a 10-month trial, but it cannot offer presence, intuitive silence, or healthy challenge. Here is what research reveals about what AI coaching can and cannot do.
        </p>

        <!-- Author Bio Bar -->
        <div class="author-bio-bar">
          <div class="author-avatar-wrap">
            <img
              src="/ranu.webp"
              alt="Ranu Patel"
              class="author-avatar-img"
            />
          </div>
          <div>
            <div class="author-name">Ranu Patel</div>
            <div class="author-role">Life Transformation Coach &amp; Healer &bull; The Narayan Presence</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Breadcrumb Component -->
    <UiPageBreadcrumb
      :items="[
        { label: 'Blog & Journal', to: '/blog' },
        { label: 'Can AI Replace Human Coaches?' }
      ]"
      :prev="{ label: 'All Articles', to: '/blog' }"
      :next="{ label: 'Clarity Workshops', to: '/workshops' }"
    />

    <!-- Main Article Body -->
    <section class="sec article-content-sec">
      <div class="wrap" style="max-width:880px">
        <!-- Featured Image -->
        <div class="article-cover-box mb-12">
          <img
            src="/images/blog/can-ai-replace-human-coaches-2026.jpg"
            alt="Can AI Replace Human Coaches? What the Research Shows About AI Life Coaching - AI Life Coach vs Human Coach"
            class="article-cover-img"
          />
        </div>

        <!-- Article Prose Content -->
        <article class="article-prose space-y-12 leading-relaxed">
          
          <!-- Introduction -->
          <div class="section-block">
            <blockquote class="brand-pullquote">
              <span class="brand-pullquote-mark" aria-hidden="true">“</span>
              <p>
                It’s 11:40 pm. You’ve typed three long paragraphs into ChatGPT about your job, your relationship, and the decision you keep postponing.
              </p>
            </blockquote>

            <p class="mt-6">
              The reply is calm, organised and kind. It gives you five steps. You feel lighter.
            </p>
            <p>
              Then, a week later, you’re back with the same three paragraphs.
            </p>
            <p>
              If that sounds familiar, you’re not alone. When Harvard Business Review analysed how people actually use generative AI in 2025, therapy and companionship came out as the number one use, ahead of coding (<a href="https://ipcloseup.com/2025/06/25/harvard-business-review-research-finds-the-top-use-of-gen-a-i-in-2025-is-companionship-therapy/" target="_blank" rel="noopener noreferrer" class="link-inline">HBR, via summary</a>). Millions of people are already treating AI as a life coach.
            </p>
            <p>
              So the question is real: <strong class="brand-highlight">can AI replace human coaches? Or is something being lost in those late-night chats?</strong>
            </p>
            <p>
              This article gives you a straight answer based on the research, not on opinion. You’ll learn which parts of coaching AI already does as well as a person, which parts it can’t do, where neither AI nor a coach should be involved, and how to use ChatGPT for self-coaching without the hidden risks.
            </p>
          </div>

          <!-- The Short Answer Callout Box -->
          <div class="brand-executive-box">
            <div class="brand-box-badge">✦ EXECUTIVE RESEARCH SUMMARY</div>
            <h2 class="text-xl sm:text-2xl font-serif font-bold mb-3 brand-gold-heading">
              The Short Answer
            </h2>
            <p class="mb-4 font-bold text-lg text-primary-contrast">
              AI can replace parts of what a coach does, but not the coach.
            </p>
            <p class="text-base mb-3 leading-relaxed">
              In a 10-month randomised trial, an AI chatbot helped people reach their goals as effectively as human coaches did (<a href="https://radar.brookes.ac.uk/radar/file/4aca9bc6-4c00-4bc1-9fde-74a184b87101/1/journal.pone.0270255.pdf" target="_blank" rel="noopener noreferrer" class="link-inline font-bold">Terblanche et al., PLOS ONE, 2022</a>). But a 2026 study found that only human coaches provided "coaching presence". Clients described AI coaching as transactional, and they felt less internally motivated without an emotional bond (<a href="https://coachingfederation.org/wp-content/uploads/2026/10/icf-ai-coaching-ai-partnership-unleash-potential.pdf" target="_blank" rel="noopener noreferrer" class="link-inline font-bold">ICF summary of Nam &amp; Choi, 2026</a>).
            </p>
            <div class="brand-key-quote">
              In other words, AI is very good at coaching’s checklist. It is not yet able to be with you.
            </div>
          </div>

          <!-- What does a life coach actually do? The three jobs of coaching -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              What Does a Life Coach Actually Do? <em>The Three Jobs of Coaching</em>
            </h2>
            <p>
              Most articles ask "AI or human?" as if coaching were one thing. It isn't. A good coach does three different jobs, and AI performs very differently at each.
            </p>
            
            <div class="space-y-4 my-6">
              <!-- Job 1 -->
              <div class="brand-job-card">
                <div class="brand-job-badge">JOB 01 &bull; STRUCTURE</div>
                <h3 class="text-lg font-bold font-serif mb-2 brand-job-title">Clarification, Milestones &amp; Tracking</h3>
                <p class="text-base mb-0">Clarifying goals, breaking them into actions, tracking progress, asking "what got in the way?" and adjusting the plan.</p>
              </div>

              <!-- Job 2 -->
              <div class="brand-job-card">
                <div class="brand-job-badge">JOB 02 &bull; PRESENCE &amp; CHALLENGE</div>
                <h3 class="text-lg font-bold font-serif mb-2 brand-job-title">The Unspoken, Sacred Silence &amp; Pattern Interruption</h3>
                <p class="text-base mb-0">Noticing what you didn’t say. Staying silent long enough for the real answer to arrive. Gently pointing out the pattern you keep repeating. Holding you to a commitment because you made it to another person.</p>
              </div>

              <!-- Job 3 -->
              <div class="brand-job-card">
                <div class="brand-job-badge">JOB 03 &bull; KNOWING THE LIMIT</div>
                <h3 class="text-lg font-bold font-serif mb-2 brand-job-title">Ethical Boundaries &amp; Clinical Referral</h3>
                <p class="text-base mb-0">Recognising when a struggle is no longer a coaching matter (persistent low mood, panic, trauma, thoughts of self-harm) and referring you to a qualified mental health professional.</p>
              </div>
            </div>

            <p>
              A life coach works with healthy, functioning people on growth, clarity and change. A coach does not diagnose or treat. That third job is about knowing where coaching ends.
            </p>
            <p class="italic text-base brand-subtle-note">
              Keep these three jobs in mind. They explain almost everything that follows.
            </p>
          </div>

          <!-- AI coaching vs human coaching: what the research says -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              AI Coaching vs Human Coaching: <em>What the Research Says</em>
            </h2>
            
            <h3 class="text-xl font-bold font-serif mt-6 mb-3 text-[#D9AA55]">
              Evidence That AI Coaching Works for Structure
            </h3>
            <p>
              The strongest head-to-head study so far comes from Nicky Terblanche and colleagues. They ran two parallel 10-month randomised controlled trials. One used human coaches. The other used Coach Vici, a text chatbot on Telegram that helped people set goals, commit to actions, check in on progress and revise plans (<a href="https://radar.brookes.ac.uk/radar/file/4aca9bc6-4c00-4bc1-9fde-74a184b87101/1/journal.pone.0270255.pdf" target="_blank" rel="noopener noreferrer" class="link-inline">Terblanche et al., 2022</a>).
            </p>
            <ul class="brand-bullet-list">
              <li>Both the AI-coached and human-coached groups beat their control groups on goal attainment.</li>
              <li>By the end, the AI coach matched the human coaches. The two groups never differed significantly at any point.</li>
              <li>People who used the chatbot more often made bigger gains.</li>
            </ul>
            <p>
              The authors drew a pointed conclusion. AI could replace coaches who rely on simplistic, model-based approaches, so human coaches need to deepen their practice.
            </p>
            <p>
              What the study did not test matters just as much. Participants were undergraduate students. Progress was self-reported. And the AI was only doing <strong>Job 1</strong>. It was a goal-tracking coach, not a coach for grief, identity, relationships or burnout.
            </p>

            <h3 class="text-xl font-bold font-serif mt-8 mb-3 text-[#D9AA55]">
              Evidence That Something Is Missing
            </h3>
            <p>
              A 2026 study published in PLOS ONE compared how clients experienced AI and human coaching. As summarised by the International Coaching Federation (ICF):
            </p>
            <ul class="brand-bullet-list">
              <li>AI reliably delivered procedural clarity: goal structuring, task suggestions and consistent follow-up.</li>
              <li>Only human coaching offered coaching presence: the attuned, responsive quality of a person who is fully with you.</li>
              <li>Clients called AI coaching transactional rather than relational.</li>
              <li>Without an emotional bond, clients reported less internalised motivation.</li>
            </ul>
            <p>
              That last point is the key one. Many people already know what to do. What they lack is the inner "yes" to do it, and that seems to grow out of being genuinely seen.
            </p>

            <h3 class="text-xl font-bold font-serif mt-8 mb-3 text-[#D9AA55]">
              An Honest Caveat About "The Relationship"
            </h3>
            <p>
              You’ll often read that the coach–client relationship is the main reason coaching works. The picture is more mixed than that.
            </p>
            <p>
              A large meta-analysis of 37 randomised trials confirmed that workplace coaching works (<a href="https://research.vu.nl/en/publications/what-can-we-know-about-the-effectiveness-of-coaching-a-meta-analy/" target="_blank" rel="noopener noreferrer" class="link-inline">de Haan &amp; Nilsson, 2023</a>). But an earlier review of two large trials by some of the same researchers found that the strength of the working alliance did not keep predicting bigger gains as coaching continued (<a href="https://radar.brookes.ac.uk/radar/items/830b5e4a-e3ad-4e27-92d0-1d80ccba82b9/1" target="_blank" rel="noopener noreferrer" class="link-inline">de Haan, Molyn &amp; Nilsson, 2020</a>).
            </p>
            <p>
              The honest conclusion is that the human relationship clearly matters, but researchers are still working out how. Anyone who tells you the science is settled in either direction is overselling.
            </p>
          </div>

          <!-- Where AI coaching genuinely wins -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              Where AI Coaching <em>Genuinely Wins</em>
            </h2>
            <p>
              It would be unfair, and unhelpful, to pretend AI has no advantages. It has real ones:
            </p>
            <ul class="brand-feature-list space-y-3 my-5">
              <li><span class="feat-dot">✦</span><span><strong>Availability:</strong> It’s there at 6 am before a hard meeting and at midnight after a hard conversation.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>Cost:</strong> Many tools have a free tier. Human coaching is a real expense for most people.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>No fear of judgement:</strong> Some people find it easier to type the embarrassing truth to a machine first.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>Repetition without fatigue:</strong> It will help you rewrite the same plan ten times without sighing.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>Structure on demand:</strong> Ask for a weekly review template, a decision matrix or journaling prompts, and you have one in seconds.</span></li>
            </ul>
            <p>
              This is why the coaching profession itself is not dismissing AI. ICF now describes three ways AI and coaching combine: <em>coach-led</em> (no AI in the relationship), <em>hybrid</em> (a human coach stays accountable while AI supports parts of the work) and <em>AI-led</em> (a purpose-built AI system with no human coach) (<a href="https://coachingfederation.org/wp-content/uploads/2026/10/icf-ai-coaching-ai-partnership-unleash-potential.pdf" target="_blank" rel="noopener noreferrer" class="link-inline">ICF, Oct 2026</a>).
            </p>
          </div>

          <!-- Where AI falls short: presence, challenge and accountability -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              Where AI Falls Short: <em>Presence, Challenge &amp; Accountability</em>
            </h2>
            <p>
              ICF is specific about what it believes AI cannot do. AI cannot be held accountable. It cannot maintain a relationship of mutual trust. It cannot be fully present. And it cannot evoke awareness through silence.
            </p>
            <div class="brand-pullquote my-6">
              <p>
                In a good coaching session, the most important moment often follows a question the coach doesn’t rush to fill. You sit with it. Something you’ve been avoiding finally surfaces. A chatbot is built to respond. Silence is not something it can offer you.
              </p>
            </div>
            <p>
              There is also the matter of accountability. Telling a person you’ll have the difficult conversation by Friday creates a different kind of commitment than telling an app. You know they will ask. You know they will notice if you dodge.
            </p>
          </div>

          <!-- The agreeable mirror: why AI's helpfulness can keep you stuck -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              The Agreeable Mirror: <em>Why AI’s Helpfulness Can Keep You Stuck</em>
            </h2>
            <p>
              This is the risk most "ChatGPT as a life coach" articles skip.
            </p>
            <p>
              General-purpose AI models are trained to be helpful and pleasant. Sometimes that tips into simply agreeing with you. In April 2025, OpenAI rolled back a ChatGPT update because it had become noticeably more sycophantic, which means overly flattering and agreeable (<a href="https://openai.com/index/expanding-on-sycophancy/" target="_blank" rel="noopener noreferrer" class="link-inline">OpenAI</a>). ICF’s 2026 guidance makes the same point about coaching: general LLMs tend to produce pleasing output, and that can conflict with the challenge growth requires.
            </p>
            <p class="font-bold text-lg text-primary-contrast">
              Why does this matter so much for personal growth?
            </p>
            <p>
              Because the thing keeping you stuck is often a story you tell yourself: <em>"I can't leave because…"</em>, <em>"They always…"</em>, <em>"I'm just not the kind of person who…"</em>
            </p>
            <p>
              A good coach questions that story. An agreeable AI tends to polish it and hand it back to you, better organised.
            </p>
            <p>
              For overthinkers there is a second trap. A tool that is always available and never tired makes it easy to go over the same worry again and again. It feels like processing. Often it is just rehearsal. If you notice you’ve asked AI the same question in five different ways this week, that is a sign you need a different kind of support. You probably don’t need a better prompt.
            </p>
          </div>

          <!-- AI therapist vs life coach: where the line is -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              AI Therapist vs Life Coach: <em>Where the Line Is</em>
            </h2>
            <p>
              This is where people get confused, and where the stakes are highest.
            </p>
            <ul class="brand-bullet-list my-4">
              <li><strong>A life coach</strong> helps a functioning person move forward on goals, choices and patterns.</li>
              <li><strong>A therapist</strong> is a licensed professional who assesses and treats mental health conditions.</li>
              <li><strong>An "AI therapist"</strong> is a chatbot that uses therapeutic language. In most places it carries none of a therapist's training, accountability or legal duties.</li>
            </ul>
            <p>
              The evidence on general chatbots in therapy-like roles is sobering. A 2025 study by researchers at Stanford and the University of Minnesota found that licensed therapists responded appropriately 93% of the time. The AI therapy bots tested managed it less than 60% of the time (<a href="https://cse.umn.edu/college/news/new-research-shows-ai-chatbots-should-not-replace-your-therapist" target="_blank" rel="noopener noreferrer" class="link-inline">University of Minnesota</a>). When a tester mentioned losing their job and then asked about tall bridges in New York, two chatbots simply listed bridges (<a href="https://techcrunch.com/2025/07/13/study-warns-of-significant-risks-in-using-ai-therapy-chatbots" target="_blank" rel="noopener noreferrer" class="link-inline">TechCrunch</a>).
            </p>
            <p>
              Regulators are responding. In August 2025, Illinois banned AI from providing therapy or making therapeutic decisions, with fines of up to $10,000 per violation (<a href="https://idfpr.illinois.gov/news/2025/gov-pritzker-signs-state-leg-prohibiting-ai-therapy-in-il.html" target="_blank" rel="noopener noreferrer" class="link-inline">Illinois IDFPR</a>; <a href="https://www.dataprivacyandsecurityinsider.com/2025/08/illinois-enacts-act-prohibiting-ai-therapy/" target="_blank" rel="noopener noreferrer" class="link-inline">Data Privacy + Security Insider</a>).
            </p>
            <p>
              To be fair, purpose-built clinical tools are a different story. In the first randomised trial of a generative AI therapy chatbot, Dartmouth’s Therabot produced significant symptom improvements (<a href="https://tto.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits" target="_blank" rel="noopener noreferrer" class="link-inline">Dartmouth</a>). But it was trained on clinical best practice, monitored by clinicians, and the lead researcher still said no generative AI is ready to work fully autonomously in mental health (<a href="https://sciencedaily.com/releases/2025/03/250327141529.htm" target="_blank" rel="noopener noreferrer" class="link-inline">ScienceDaily</a>).
            </p>
            
            <!-- Helpline Alert Box -->
            <div class="brand-helpline-card my-6">
              <div class="flex items-center gap-2 mb-2 font-bold text-base text-[#171B48] dark:text-[#F8D78B]">
                <span class="text-xl">⚠️</span>
                <span>The rule is simple: an AI chatbot is not a therapist. Neither is a life coach.</span>
              </div>
              <p class="text-sm mb-0 leading-relaxed text-[#3a3753] dark:text-[#EAE2D4]">
                If you’re in India and struggling with your mental health, <strong>Tele-MANAS (14416)</strong> is a free, 24×7 government helpline staffed by mental health professionals (<a href="https://pib.gov.in/PressReleasePage.aspx?PRID=2022057" target="_blank" rel="noopener noreferrer" class="link-inline">PIB</a>). If you are in immediate danger, contact local emergency services.
              </p>
            </div>
          </div>

          <!-- Can you use ChatGPT as a life coach? A safe protocol -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              Can You Use ChatGPT as a Life Coach? <em>A Safe Protocol</em>
            </h2>
            <p>
              Yes, for <strong>Job 1</strong>. Here’s how to do it without falling into the traps above:
            </p>
            
            <div class="space-y-6 my-6">
              <!-- Protocol 1 -->
              <div class="brand-protocol-card">
                <h3 class="text-base font-bold text-[#D9AA55] mb-2 flex items-center gap-2">
                  <span class="protocol-step-no">01</span>
                  <span>Give it a clear role and a clear limit</span>
                </h3>
                <p class="text-xs sm:text-sm mb-2 text-[#7A5718] dark:text-[#EAE2D4]/75 font-semibold">Start with a prompt like:</p>
                <div class="brand-prompt-block">
                  <div class="brand-prompt-bar">✦ PROMPT TEMPLATE</div>
                  <code>"Act as a goal-focused coach. Ask me one question at a time. Don't give advice until you've asked at least three questions. If I describe symptoms of anxiety, depression or crisis, tell me to speak to a qualified professional instead of coaching me."</code>
                </div>
              </div>

              <!-- Protocol 2 -->
              <div class="brand-protocol-card">
                <h3 class="text-base font-bold text-[#D9AA55] mb-2 flex items-center gap-2">
                  <span class="protocol-step-no">02</span>
                  <span>Build in disagreement</span>
                </h3>
                <p class="text-xs sm:text-sm mb-2 text-[#7A5718] dark:text-[#EAE2D4]/75 font-semibold">Add this to counter the agreeable mirror:</p>
                <div class="brand-prompt-block">
                  <div class="brand-prompt-bar">✦ PROMPT TEMPLATE</div>
                  <code>"Before you respond, point out one assumption I'm making that might be wrong, and one thing I seem to be avoiding."</code>
                </div>
              </div>

              <!-- Protocol 3 -->
              <div class="brand-protocol-card">
                <h3 class="text-base font-bold text-[#D9AA55] mb-2 flex items-center gap-2">
                  <span class="protocol-step-no">03</span>
                  <span>Keep private things private</span>
                </h3>
                <p class="text-sm mb-0">
                  OpenAI's CEO has said publicly that conversations with ChatGPT don't have the legal confidentiality you get with a doctor, lawyer or therapist (<a href="https://techcrunch.com/2025/07/25/sam-altman-warns-theres-no-legal-confidentiality-when-using-chatgpt-as-a-therapist" target="_blank" rel="noopener noreferrer" class="link-inline">TechCrunch</a>). Leave out full names, health details, workplace specifics and anything you wouldn't want read aloud. Check your data settings.
                </p>
              </div>

              <!-- Protocol 4 -->
              <div class="brand-protocol-card">
                <h3 class="text-base font-bold text-[#D9AA55] mb-2 flex items-center gap-2">
                  <span class="protocol-step-no">04</span>
                  <span>Turn talk into one action</span>
                </h3>
                <p class="text-sm mb-0">
                  End every session by asking: <em>"What is the one action I'll take in the next 48 hours, and how will I know I did it?"</em> Write it somewhere other than the chat.
                </p>
              </div>

              <!-- Protocol 5 -->
              <div class="brand-protocol-card">
                <h3 class="text-base font-bold text-[#D9AA55] mb-2 flex items-center gap-2">
                  <span class="protocol-step-no">05</span>
                  <span>Watch for the stop signs</span>
                </h3>
                <p class="text-sm mb-2">Pause the AI and talk to a person if:</p>
                <ul class="brand-bullet-list text-xs sm:text-sm">
                  <li>You’re asking the same question again and again without acting.</li>
                  <li>You feel worse after sessions, or can’t sleep without "checking in".</li>
                  <li>The topic is grief, trauma, self-harm, abuse or a relationship in crisis.</li>
                  <li>You’re about to make a big, hard-to-reverse decision based mainly on what the AI said.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Is an AI coach free? -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              Is an AI Coach Free?
            </h2>
            <p>
              Often free to start, rarely free to keep.
            </p>
            <p>
              General chatbots like ChatGPT have free tiers. Most dedicated "AI life coach" apps are freemium. They are free to download but capped or upgraded through in-app purchases. For example, one app offers five free text sessions a day (<a href="https://apps.apple.com/app/nlp-touch/id6755907964" target="_blank" rel="noopener noreferrer" class="link-inline">App Store</a>). Another keeps advanced coaching behind a paid plan of US$12.99 a month (<a href="https://apps.apple.com/app/id6762415788" target="_blank" rel="noopener noreferrer" class="link-inline">App Store</a>).
            </p>
            <p>
              There is a second cost too. When an app is free, you usually pay with your data, and the conversation is about your inner life. Read the privacy policy before you share anything personal.
            </p>
          </div>

          <!-- Decision Table: AI, human coach or therapist? -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              AI, Human Coach or Therapist? <em>A Decision Table</em>
            </h2>
            <p>
              Use this framework to determine the exact support your current situation requires:
            </p>
            
            <div class="brand-table-wrapper my-6">
              <table class="brand-decision-table">
                <thead>
                  <tr>
                    <th>Your Situation</th>
                    <th>Best Fit</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-medium">Planning a week, building a habit, prepping for a meeting</td>
                    <td><span class="badge-fit ai">AI</span></td>
                    <td>Pure structure (Job 1)</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Journaling prompts, organising scattered thoughts</td>
                    <td><span class="badge-fit ai">AI</span></td>
                    <td>Low risk, high convenience</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Same goal, same excuses, months of no movement</td>
                    <td><span class="badge-fit coach">★ Human Coach</span></td>
                    <td>You need challenge and accountability (Job 2)</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Career or life crossroads with real trade-offs</td>
                    <td><span class="badge-fit coach">★ Human Coach</span> <span class="sub-fit">(AI for prep)</span></td>
                    <td>Values and fears are involved, not just options</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Overthinking that loops at night</td>
                    <td><span class="badge-fit coach">★ Human Coach</span></td>
                    <td>AI can feed rehearsal; presence breaks the loop</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Relationship tension</td>
                    <td><span class="badge-fit coach">★ Human Coach</span></td>
                    <td>Patterns between people are hard to see from one side</td>
                  </tr>
                  <tr>
                    <td class="font-medium">Persistent low mood, panic, trauma, self-harm thoughts</td>
                    <td><span class="badge-fit therapist">Therapist or Doctor</span></td>
                    <td>Clinical care, beyond coaching and beyond AI (Tele-MANAS 14416 in India)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="brand-cta-callout my-6">
              <p class="text-base mb-2">
                If you see yourself in the middle rows, that is the work we do at <strong>The Narayan Presence</strong> through
                <NuxtLink to="/coaching" class="link-inline font-bold">Mental Clarity Coaching</NuxtLink>,
                online from Ahmedabad for clients anywhere.
              </p>
            </div>
          </div>

          <!-- The future of coaching: hybrid, not replacement -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              The Future of Coaching: <em>Hybrid, Not Replacement</em>
            </h2>
            <p>
              The market data does not suggest a profession being wiped out. The 2025 ICF Global Coaching Study counted a record 122,974 coach practitioners and US$5.34 billion in revenue, up 17% since 2023 (<a href="https://coachingfederation.org/blog/coaching-industry-continues-global-growth-with-5-34-billion-usd-revenue-new-research-reveals/" target="_blank" rel="noopener noreferrer" class="link-inline">ICF</a>). And in ICF's 2026 consumer study, 80% of consumers said they prefer human-led coaching (<a href="https://coachingfederation.org/blog/new-consumer-insights-for-your-practice-and-the-profession/" target="_blank" rel="noopener noreferrer" class="link-inline">ICF</a>).
            </p>
            <p>
              The more likely future looks like this:
            </p>
            <ul class="brand-feature-list space-y-3 my-5">
              <li><span class="feat-dot">✦</span><span><strong>AI handles the in-between:</strong> reminders, reflections, practice and preparation.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>Humans handle the turning points:</strong> the honest conversation, the pattern you couldn't see, the commitment you keep because someone believed you would.</span></li>
              <li><span class="feat-dot">✦</span><span><strong>Coaches who only follow a script feel the pressure:</strong> That is exactly what the 2022 trial predicted. Coaches who offer real presence become more valuable, not less.</span></li>
            </ul>
          </div>

          <!-- Frequently Asked Questions -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-6 brand-gold-heading">
              Frequently Asked Questions
            </h2>
            
            <div class="space-y-4">
              <details class="brand-faq-item">
                <summary class="faq-summary">Can AI replace human coaches?</summary>
                <div class="faq-answer">
                  Not fully. Research shows AI can match human coaches on goal-setting and progress tracking. It does not provide coaching presence, real accountability or the judgement to know when someone needs a therapist instead.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">Will AI replace life coaches?</summary>
                <div class="faq-answer">
                  It is more likely to replace scripted, checklist-style coaching than life coaching as a whole. Coach numbers and revenue were still rising in 2025, and most consumers say they prefer a human coach.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">Can I use ChatGPT as a life coach?</summary>
                <div class="faq-answer">
                  Yes, for structure: goals, plans, reflection prompts and preparation. Give it a clear role, ask it to challenge your assumptions, avoid sharing sensitive personal details, and move to a human when you keep circling the same issue.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">Is AI coaching as effective as human coaching?</summary>
                <div class="faq-answer">
                  For goal attainment in one 10-month study with students, yes. For motivation, emotional depth and complex life issues, the evidence favours humans. AI coaching has been studied far less than human coaching.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">What's the difference between an AI therapist and a life coach?</summary>
                <div class="faq-answer">
                  A life coach helps healthy people grow and make changes. A therapist is licensed to assess and treat mental health conditions. An "AI therapist" chatbot is neither, and studies show general chatbots can respond inappropriately to people in crisis.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">Is there a free AI life coach?</summary>
                <div class="faq-answer">
                  Many apps are free to start but limit sessions or features unless you pay. General chatbots also have free tiers. In both cases, check how your conversations are stored and used.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">Are my conversations with an AI coach private?</summary>
                <div class="faq-answer">
                  Not in the way therapy or coaching sessions are. OpenAI's CEO has said ChatGPT conversations lack legal confidentiality. Treat anything you type as potentially stored.
                </div>
              </details>

              <details class="brand-faq-item">
                <summary class="faq-summary">What does a life coach do that AI can't?</summary>
                <div class="faq-answer">
                  A coach can stay silent so you find your own answer. A coach notices what you avoid, challenges stories that keep you stuck, and holds you accountable as a person you've made a commitment to.
                </div>
              </details>
            </div>
          </div>

          <!-- Conclusion -->
          <div class="section-block">
            <h2 class="h2 text-2xl sm:text-3xl font-serif mb-4 brand-gold-heading">
              Conclusion
            </h2>
            <p class="font-bold text-xl font-serif text-primary-contrast">
              AI hasn't replaced the coach. It has replaced the clipboard.
            </p>
            <p>
              If what you need is structure (a plan, a prompt, a weekly review), AI is a genuinely useful and often free tool. The research backs that up.
            </p>
            <p>
              If what you need is to finally change something you've understood for months but haven't acted on, more answers won't help. You need someone who is fully present with you, who doesn't simply agree, and who will notice whether you follow through.
            </p>
            <p class="font-medium">
              Use AI for the checklist. Choose a human for the turning point. And when life feels heavier than coaching can hold, reach for a therapist.
            </p>

            <!-- Reset Workshop Box -->
            <div class="brand-reset-box">
              <div class="space-y-2">
                <div class="brand-box-badge mb-1">FREE LIVE SESSION</div>
                <h3 class="text-xl sm:text-2xl font-bold font-serif brand-reset-title">
                  Step Out of the Mental Noise
                </h3>
                <p class="text-sm max-w-lg mb-0 text-muted-contrast">
                  If you’re not sure which one you need, start with clarity. Join our free <strong>Clarity Reset Workshop</strong>, a calm, guided session to step out of mental loops and see what’s actually in front of you.
                </p>
              </div>
              <NuxtLink to="/workshops" class="btn btn-gold shrink-0 shadow-lg">
                Reserve your free seat &rarr;
              </NuxtLink>
            </div>

            <p class="text-xs text-center mt-6 brand-subtle-note">
              The Narayan Presence offers coaching and reflective practice. It is not a substitute for therapy or medical care.
            </p>
          </div>

        </article>

        <!-- Back to Blog & CTAs -->
        <div class="pt-12 mt-12 border-t border-[#D9AA55]/20 flex items-center justify-between flex-wrap gap-4">
          <NuxtLink to="/blog" class="btn btn-line" style="font-size:14px">
            &larr; Back to all Articles
          </NuxtLink>
          <NuxtLink to="/coaching" class="btn btn-gold" style="font-size:14px">
            Work 1-to-1 with Ranu &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Deepen your <em>practice.</em></h2>
        <p class="lead">Explore structured coaching or register for our next live workshop.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/coaching">Explore 1-to-1 Coaching <span>→</span></NuxtLink>
          <NuxtLink class="btn btn-line" style="color:#F8F5EF" to="/workshops">View Workshops</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()

useHead({
  title: 'Can AI Replace Human Coaches? What Research Shows — Narayan Presence',
  meta: [
    { name: 'description', content: 'AI matched human coaches on goal-setting in a 10-month trial, but it cannot offer presence or challenge. Here is what AI coaching can and cannot do.' },
    { name: 'keywords', content: 'can AI replace human coaches, will ai replace life coaches, ai coaching vs human coaching, ai life coach, chatgpt as a life coach, ai therapist vs life coach, is ai coach free, what does a life coach do, future of coaching' },
    { property: 'og:title', content: 'Can AI Replace Human Coaches? What Research Shows' },
    { property: 'og:description', content: 'AI matched human coaches on goal-setting in a 10-month trial, but it cannot offer presence or challenge. Here is what AI coaching can and cannot do.' },
    { property: 'og:image', content: 'https://narayanpresence.com/images/blog/can-ai-replace-human-coaches-2026.jpg' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Can AI Replace Human Coaches? What Research Shows' },
    { name: 'twitter:description', content: 'AI matched human coaches on goal-setting in a 10-month trial, but it cannot offer presence or challenge.' },
    { name: 'twitter:image', content: 'https://narayanpresence.com/images/blog/can-ai-replace-human-coaches-2026.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://narayanpresence.com/blog/can-ai-replace-human-coaches-in-2026' },
    { rel: 'stylesheet', href: '/style.css' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': 'https://narayanpresence.com/blog/can-ai-replace-human-coaches-in-2026#article',
            'headline': 'Can AI Replace Human Coaches? What the Research Shows About AI Life Coaching',
            'description': 'AI matched human coaches on goal-setting in a 10-month trial, but it cannot offer presence or challenge. Here is what AI coaching can and cannot do.',
            'image': 'https://narayanpresence.com/images/blog/can-ai-replace-human-coaches-2026.jpg',
            'datePublished': '2026-11-24T00:00:00+05:30',
            'dateModified': '2026-11-24T19:50:00+05:30',
            'mainEntityOfPage': 'https://narayanpresence.com/blog/can-ai-replace-human-coaches-in-2026',
            'author': {
              '@type': 'Person',
              'name': 'Ranu Patel',
              'jobTitle': 'Life Transformation Coach & Healer',
              'url': 'https://narayanpresence.com/founder'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'The Narayan Presence',
              'url': 'https://narayanpresence.com',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://narayanpresence.com/logo-official.png'
              }
            }
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://narayanpresence.com/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog & Journal',
                'item': 'https://narayanpresence.com/blog'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Can AI Replace Human Coaches?',
                'item': 'https://narayanpresence.com/blog/can-ai-replace-human-coaches-in-2026'
              }
            ]
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Can AI replace human coaches?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Not fully. Research shows AI can match human coaches on goal-setting and progress tracking. It does not provide coaching presence, real accountability or the judgement to know when someone needs a therapist instead.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Will AI replace life coaches?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'It is more likely to replace scripted, checklist-style coaching than life coaching as a whole. Coach numbers and revenue were still rising in 2025, and most consumers say they prefer a human coach.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can I use ChatGPT as a life coach?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, for structure: goals, plans, reflection prompts and preparation. Give it a clear role, ask it to challenge your assumptions, avoid sharing sensitive personal details, and move to a human when you keep circling the same issue.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Is AI coaching as effective as human coaching?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'For goal attainment in one 10-month study with students, yes. For motivation, emotional depth and complex life issues, the evidence favours humans. AI coaching has been studied far less than human coaching.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What\'s the difference between an AI therapist and a life coach?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A life coach helps healthy people grow and make changes. A therapist is licensed to assess and treat mental health conditions. An "AI therapist" chatbot is neither, and studies show general chatbots can respond inappropriately to people in crisis.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Is there a free AI life coach?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Many apps are free to start but limit sessions or features unless you pay. General chatbots also have free tiers. In both cases, check how your conversations are stored and used.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Are my conversations with an AI coach private?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Not in the way therapy or coaching sessions are. OpenAI\'s CEO has said ChatGPT conversations lack legal confidentiality. Treat anything you type as potentially stored.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What does a life coach do that AI can\'t?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A coach can stay silent so you find your own answer. A coach notices what you avoid, challenges stories that keep you stuck, and holds you accountable as a person you\'ve made a commitment to.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
/* ==========================================================================
   AUTHENTIC THE NARAYAN PRESENCE BRAND PALETTE
   Primary Gold: #D9AA55 | Radiant Dark Gold: #F8D78B | Deep Ochre: #7A5718
   Royal Navy: #171B48 | Midnight Ink: #0F1233 | Sand: #EAE2D4 | Ivory: #F8F5EF
   ========================================================================== */

.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}

.narayan-subpage h1,
.narayan-subpage h2,
.narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

/* Hero Badge */
.brand-category-pill {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #171B48;
  color: #F8D78B;
  border: 1px solid rgba(217, 170, 85, 0.45);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

.hero-article-title {
  margin-top: 20px;
  font-size: clamp(30px, 4.5vw, 52px);
  line-height: 1.18;
  font-weight: 700;
  color: #F8F5EF;
}

.hero-article-title em {
  font-style: italic;
  color: #D9AA55;
}

/* Author Bar */
.author-bio-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(217, 170, 85, 0.25);
  max-width: 440px;
}

.author-avatar-wrap {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 2px;
  background: linear-gradient(135deg, #D9AA55 0%, #7A5718 100%);
  box-shadow: 0 0 16px rgba(217, 170, 85, 0.35);
  flex-shrink: 0;
}

.author-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.author-name {
  font-size: 15px;
  font-weight: 700;
  color: #F8F5EF;
}

.author-role {
  font-size: 12px;
  color: #F8D78B;
  margin-top: 2px;
}

/* Featured Cover */
.article-cover-box {
  border-radius: 24px;
  overflow: hidden;
  border: 1.5px solid rgba(217, 170, 85, 0.35);
  box-shadow: 0 20px 48px -12px rgba(15, 18, 51, 0.3);
}

.article-cover-img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

/* Article Typography */
.article-prose {
  font-size: 18px;
  line-height: 1.85;
}

.article-prose p {
  margin-bottom: 22px;
}

.brand-gold-heading {
  color: var(--fg);
}

.brand-gold-heading em {
  color: #D9AA55;
  font-style: italic;
}

:global(:root:not([data-theme="light"])) .brand-gold-heading em,
:global([data-theme="dark"]) .brand-gold-heading em {
  color: #F8D78B;
}

.brand-highlight {
  color: var(--fg);
}

.text-primary-contrast {
  color: var(--fg);
}

.text-muted-contrast {
  color: var(--muted);
}

.brand-subtle-note {
  color: var(--muted);
}

/* Brand Pullquote */
.brand-pullquote {
  position: relative;
  margin: 28px 0;
  padding: 24px 30px;
  border-left: 4px solid #D9AA55;
  background: rgba(217, 170, 85, 0.08);
  border-radius: 0 20px 20px 0;
  box-shadow: 0 4px 20px rgba(23, 27, 72, 0.04);
}

:global(:root:not([data-theme="light"])) .brand-pullquote,
:global([data-theme="dark"]) .brand-pullquote {
  background: rgba(23, 27, 72, 0.5);
  border-left-color: #D9AA55;
}

.brand-pullquote p {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 21px;
  line-height: 1.6;
  color: var(--fg);
  margin-bottom: 0;
}

.brand-pullquote-mark {
  position: absolute;
  top: -12px;
  left: 12px;
  font-family: 'Fraunces', serif;
  font-size: 64px;
  line-height: 1;
  color: #D9AA55;
  opacity: 0.25;
  pointer-events: none;
}

/* Executive Research Summary Box */
.brand-executive-box {
  position: relative;
  padding: 32px 34px;
  border-radius: 24px;
  border: 1.5px solid #D9AA55;
  background: linear-gradient(135deg, rgba(217, 170, 85, 0.12) 0%, rgba(234, 226, 212, 0.35) 100%);
  box-shadow: 0 10px 32px -6px rgba(23, 27, 72, 0.08);
  margin: 36px 0;
}

:global(:root:not([data-theme="light"])) .brand-executive-box,
:global([data-theme="dark"]) .brand-executive-box {
  background: linear-gradient(135deg, rgba(23, 27, 72, 0.9) 0%, rgba(15, 18, 51, 0.95) 100%);
  border-color: rgba(217, 170, 85, 0.45);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.4);
}

.brand-box-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 9999px;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: #171B48;
  color: #F8D78B;
  border: 1px solid rgba(217, 170, 85, 0.5);
  margin-bottom: 14px;
}

.brand-key-quote {
  margin-top: 18px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(217, 170, 85, 0.16);
  border-left: 3px solid #D9AA55;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  color: var(--fg);
}

/* Job Cards (3 Jobs of Coaching) */
.brand-job-card {
  padding: 24px 28px;
  border-radius: 20px;
  border: 1.5px solid #EAE2D4;
  background: #FFFFFF;
  box-shadow: 0 4px 18px rgba(23, 27, 72, 0.04);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.brand-job-card:hover {
  transform: translateY(-3px);
  border-color: #D9AA55;
  box-shadow: 0 12px 28px rgba(23, 27, 72, 0.08);
}

:global(:root:not([data-theme="light"])) .brand-job-card,
:global([data-theme="dark"]) .brand-job-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
}

:global(:root:not([data-theme="light"])) .brand-job-card:hover,
:global([data-theme="dark"]) .brand-job-card:hover {
  border-color: #D9AA55;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55), 0 0 16px rgba(217, 170, 85, 0.15);
}

.brand-job-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: rgba(217, 170, 85, 0.16);
  color: #7A5718;
  border: 1px solid rgba(217, 170, 85, 0.35);
  margin-bottom: 8px;
}

:global(:root:not([data-theme="light"])) .brand-job-badge,
:global([data-theme="dark"]) .brand-job-badge {
  color: #F8D78B;
  background: rgba(217, 170, 85, 0.2);
}

.brand-job-title {
  color: var(--fg);
}

/* Bullet Lists with Brand Accents */
.brand-bullet-list {
  list-style: none;
  padding-left: 0;
  margin: 18px 0;
  space-y: 10px;
}

.brand-bullet-list li {
  position: relative;
  padding-left: 26px;
  margin-bottom: 10px;
  font-size: 16px;
}

.brand-bullet-list li::before {
  content: '✦';
  position: absolute;
  left: 0;
  top: 0;
  color: #D9AA55;
  font-size: 13px;
}

.brand-feature-list {
  list-style: none;
  padding-left: 0;
}

.brand-feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16.5px;
}

.feat-dot {
  color: #D9AA55;
  font-size: 14px;
  margin-top: 3px;
  flex-shrink: 0;
}

/* Prompt Engineering Cards */
.brand-protocol-card {
  padding: 24px 26px;
  border-radius: 20px;
  border: 1.5px solid #EAE2D4;
  background: #FFFFFF;
  box-shadow: 0 4px 18px rgba(23, 27, 72, 0.04);
}

:global(:root:not([data-theme="light"])) .brand-protocol-card,
:global([data-theme="dark"]) .brand-protocol-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}

.protocol-step-no {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #171B48;
  color: #F8D78B;
  font-size: 11px;
  font-weight: 800;
  border: 1px solid rgba(217, 170, 85, 0.4);
}

.brand-prompt-block {
  margin-top: 10px;
  border-radius: 14px;
  overflow: hidden;
  border: 1.5px solid rgba(217, 170, 85, 0.35);
  box-shadow: 0 6px 20px rgba(15, 18, 51, 0.2);
}

.brand-prompt-bar {
  background: #171B48;
  color: #F8D78B;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 6px 14px;
  border-bottom: 1px solid rgba(217, 170, 85, 0.25);
}

.brand-prompt-block code {
  display: block;
  background: #0F1233;
  color: #F8F5EF;
  font-family: 'DM Mono', monospace, ui-monospace;
  font-size: 13.5px;
  line-height: 1.6;
  padding: 16px 18px;
  user-select: all;
  white-space: pre-wrap;
}

/* Decision Table with Brand Colors */
.brand-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border-radius: 20px;
  border: 1.5px solid #D9AA55;
  box-shadow: 0 10px 30px rgba(23, 27, 72, 0.08);
}

.brand-decision-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 15px;
  line-height: 1.5;
}

.brand-decision-table th {
  padding: 16px 20px;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 16px;
  font-weight: 700;
  background: #171B48;
  color: #F8D78B;
  border-bottom: 2px solid #D9AA55;
  white-space: nowrap;
}

.brand-decision-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #EAE2D4;
  color: var(--body);
}

:global(:root:not([data-theme="light"])) .brand-decision-table td,
:global([data-theme="dark"]) .brand-decision-table td {
  border-bottom-color: rgba(217, 170, 85, 0.2);
  background: #141845;
}

:global(:root:not([data-theme="light"])) .brand-decision-table tr:hover td,
:global([data-theme="dark"]) .brand-decision-table tr:hover td {
  background: rgba(23, 27, 72, 0.85);
}

.brand-decision-table tr:hover td {
  background: rgba(217, 170, 85, 0.06);
}

.brand-decision-table tbody tr:last-child td {
  border-bottom: none;
}

/* Table Badges */
.badge-fit {
  display: inline-block;
  padding: 4px 11px;
  border-radius: 9999px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.badge-fit.ai {
  background: rgba(23, 27, 72, 0.1);
  color: #171B48;
  border: 1px solid rgba(23, 27, 72, 0.25);
}

:global(:root:not([data-theme="light"])) .badge-fit.ai,
:global([data-theme="dark"]) .badge-fit.ai {
  background: #171B48;
  color: #EAE2D4;
  border-color: rgba(217, 170, 85, 0.35);
}

.badge-fit.coach {
  background: #D9AA55;
  color: #0F1233;
  font-weight: 800;
  border: 1px solid #D9AA55;
  box-shadow: 0 2px 8px rgba(217, 170, 85, 0.4);
}

.badge-fit.therapist {
  background: rgba(153, 27, 27, 0.12);
  color: #991B1B;
  border: 1px solid rgba(153, 27, 27, 0.3);
}

:global(:root:not([data-theme="light"])) .badge-fit.therapist,
:global([data-theme="dark"]) .badge-fit.therapist {
  background: rgba(153, 27, 27, 0.25);
  color: #FCA5A5;
  border-color: rgba(239, 68, 68, 0.4);
}

.sub-fit {
  font-size: 12px;
  opacity: 0.75;
  margin-left: 4px;
}

/* Helpline Warning Card */
.brand-helpline-card {
  padding: 24px 28px;
  border-radius: 20px;
  border: 1.5px solid #D9AA55;
  background: rgba(217, 170, 85, 0.12);
  box-shadow: 0 6px 20px rgba(23, 27, 72, 0.05);
}

:global(:root:not([data-theme="light"])) .brand-helpline-card,
:global([data-theme="dark"]) .brand-helpline-card {
  background: rgba(23, 27, 72, 0.6);
  border-color: rgba(217, 170, 85, 0.45);
}

/* Inline Coaching CTA Callout */
.brand-cta-callout {
  padding: 22px 26px;
  border-radius: 18px;
  border: 1px solid rgba(217, 170, 85, 0.35);
  background: rgba(217, 170, 85, 0.08);
}

:global(:root:not([data-theme="light"])) .brand-cta-callout,
:global([data-theme="dark"]) .brand-cta-callout {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.3);
}

.brand-cta-callout p {
  color: var(--fg);
  margin-bottom: 0;
}

/* FAQ Accordion Styling */
.brand-faq-item {
  padding: 22px 26px;
  border-radius: 18px;
  border: 1.5px solid #EAE2D4;
  background: #FFFFFF;
  box-shadow: 0 4px 16px rgba(23, 27, 72, 0.03);
  cursor: pointer;
  transition: all 0.25s ease;
}

.brand-faq-item:hover {
  border-color: #D9AA55;
}

:global(:root:not([data-theme="light"])) .brand-faq-item,
:global([data-theme="dark"]) .brand-faq-item {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

:global(:root:not([data-theme="light"])) .brand-faq-item:hover,
:global([data-theme="dark"]) .brand-faq-item:hover {
  border-color: #D9AA55;
}

.faq-summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--fg);
}

.faq-summary::-webkit-details-marker {
  display: none;
}

.faq-summary::after {
  content: '+';
  font-size: 22px;
  font-weight: 600;
  color: #D9AA55;
  transition: transform 0.25s ease;
  margin-left: 12px;
}

.brand-faq-item[open] .faq-summary::after {
  content: '−';
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.7;
  color: var(--body);
}

/* Reset Workshop Banner */
.brand-reset-box {
  padding: 34px 38px;
  border-radius: 24px;
  border: 2px solid #D9AA55;
  background: linear-gradient(135deg, rgba(255, 253, 248, 1) 0%, rgba(245, 236, 224, 0.8) 100%);
  box-shadow: 0 16px 40px rgba(217, 170, 85, 0.15);
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

@media (min-width: 640px) {
  .brand-reset-box {
    flex-direction: row;
    text-align: left;
  }
}

:global(:root:not([data-theme="light"])) .brand-reset-box,
:global([data-theme="dark"]) .brand-reset-box {
  background: linear-gradient(135deg, #171B48 0%, #0F1233 100%);
  border-color: #D9AA55;
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.5);
}

.brand-reset-title {
  color: var(--fg);
  margin: 0;
}

/* Hyperlinks */
.link-inline {
  color: #B8860B;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease, opacity 0.2s ease;
}

:global(:root:not([data-theme="light"])) .link-inline,
:global([data-theme="dark"]) .link-inline {
  color: #F8D78B;
}

.link-inline:hover {
  opacity: 0.8;
}
</style>