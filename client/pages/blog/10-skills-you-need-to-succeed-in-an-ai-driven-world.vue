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
          <NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/blog">Blog</NuxtLink> / 10 Skills You Need to Succeed in an AI-Driven World
        </p>

        <div class="flex items-center gap-2.5 flex-wrap">
          <span class="brand-category-pill">
            Future of Work &bull; Human Mastery
          </span>
          <span class="text-xs text-[#EAE2D4]/75 flex items-center gap-1 font-medium">
            <svg class="w-3.5 h-3.5 text-[#D9AA55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            8 min read
          </span>
          <span class="text-xs text-[#EAE2D4]/40">&bull;</span>
          <span class="text-xs text-[#D9AA55] font-semibold tracking-wide">Research Edition &bull; 2026</span>
        </div>

        <h1 class="hero-article-title">
          10 Skills You Need to Succeed in an <em>AI-Driven World</em>
        </h1>

        <p class="lead hero-in">
          The skills AI can’t replace, backed by WEF, PwC, and MIT research—with a weekly practice for each. Learn why employers pay 56% more for people who combine technical fluency with durable human depth.
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
        { label: '10 Skills You Need to Succeed in an AI-Driven World' }
      ]"
      :prev="{ label: 'All Articles', to: '/blog' }"
      :next="{ label: 'Can AI Replace Human Coaches?', to: '/blog/can-ai-replace-human-coaches-in-2026' }"
    />

    <!-- Main Article Body -->
    <section class="sec article-content-sec">
      <div class="wrap" style="max-width:880px">
        <!-- Featured Image -->
        <div class="article-cover-box mb-12">
          <img
            src="/images/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world.jpg"
            alt="10 Skills You Need to Succeed in an AI-Driven World - The Narayan Presence with Ranu Patel"
            class="article-cover-img"
          />
        </div>

        <!-- Article Prose Content -->
        <article class="article-prose space-y-12 leading-relaxed">
          
          <!-- Introduction -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-6">
              Introduction: The Real Gap in an <em>AI-Accelerated Workplace</em>
            </h2>

            <p>
              Picture two colleagues using the same AI tool on the same report. This is a made-up example, but you have probably seen it happen.
            </p>
            <p>
              The first one pastes in the brief, accepts the draft and sends it. The second asks the AI three sharper questions, spots a number that doesn’t add up, rewrites the opening so it speaks to the client’s real worry, and sends it an hour later.
            </p>
            <p class="font-semibold text-lg text-primary-contrast">
              Same tool. Very different value.
            </p>

            <blockquote class="brand-pullquote">
              <span class="brand-pullquote-mark" aria-hidden="true">“</span>
              <p>
                Skills for AI-exposed jobs are now changing 66% faster than for other jobs. In India, 38% of jobseekers feel unprepared for how quickly technology is changing skill requirements.
              </p>
            </blockquote>

            <p>
              That gap is what this article is about. AI is changing what work requires faster than most of us can keep up. PwC’s analysis of close to a billion job ads found that skills for AI-exposed jobs are now changing 66% faster than for other jobs (<a href="https://www.pwc.com/ua/en/survey/2025/ai-impact-on-jobs.html" target="_blank" rel="noopener noreferrer" class="link-inline">PwC, 2025</a>). In India, 38% of jobseekers say they feel unprepared for how quickly technology is changing skill requirements (<a href="https://www.peoplematters.in/news/ai-and-emerging-tech/as-technology-changes-jobs-linkedin-identifies-the-skills-that-will-keep-professionals-employable-48542" target="_blank" rel="noopener noreferrer" class="link-inline">LinkedIn via People Matters</a>).
            </p>
            <p>
              Most lists of “skills AI can’t replace” stop at naming soft skills. This guide goes further. For each of the 10 skills, you’ll see why AI makes it more valuable, what the evidence says, and a short weekly practice to build it. You’ll also see the one skill most lists miss: <strong>protecting your ability to think at all, when a machine is always offering to think for you.</strong>
            </p>
          </div>

          <!-- Executive Summary: The Short Answer -->
          <div class="brand-executive-box">
            <div class="brand-executive-pill">The Short Answer</div>
            <h3 class="text-xl sm:text-2xl font-bold font-serif mb-4 brand-gold-heading">
              Which Skills Matter Most in the <em>Age of AI?</em>
            </h3>
            <p class="text-sm sm:text-base text-primary-contrast mb-4">
              The skills you need in an AI-driven world fall into three distinct, mutually reinforcing groups:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
              <!-- Card 1 -->
              <div class="brand-group-card group">
                <div class="group-header">
                  <span class="group-badge">Group 01</span>
                  <span class="group-icon">🧠</span>
                </div>
                <h4 class="group-title">Mind Skills</h4>
                <div class="group-sub">
                  Focused attention, critical thinking &amp; self-awareness
                </div>
                <div class="group-divider"></div>
                <p class="group-desc">
                  <span class="gold-quote">“</span>These decide whether you use AI or AI quietly uses you.<span class="gold-quote">”</span>
                </p>
              </div>

              <!-- Card 2 -->
              <div class="brand-group-card group">
                <div class="group-header">
                  <span class="group-badge">Group 02</span>
                  <span class="group-icon">🤝</span>
                </div>
                <h4 class="group-title">People Skills</h4>
                <div class="group-sub">
                  Emotional intelligence, communication &amp; ethical judgment
                </div>
                <div class="group-divider"></div>
                <p class="group-desc">
                  <span class="gold-quote">“</span>AI can imitate them in words, but it cannot be held accountable for them.<span class="gold-quote">”</span>
                </p>
              </div>

              <!-- Card 3 -->
              <div class="brand-group-card group">
                <div class="group-header">
                  <span class="group-badge">Group 03</span>
                  <span class="group-icon">⚡</span>
                </div>
                <h4 class="group-title">Adaptive Skills</h4>
                <div class="group-sub">
                  AI literacy, creative problem framing, resilience &amp; agility
                </div>
                <div class="group-divider"></div>
                <p class="group-desc">
                  <span class="gold-quote">“</span>These keep you indispensable as automated tools and roles rapidly evolve.<span class="gold-quote">”</span>
                </p>
              </div>
            </div>
            <p class="text-xs sm:text-sm text-primary-contrast mt-2">
              This matches what global employers report. In the World Economic Forum’s Future of Jobs Report 2025, <strong>analytical thinking is the top core skill</strong>, with seven in ten companies calling it essential. Employers expect <strong>39% of workers’ core skills to change by 2030</strong> (<a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/" target="_blank" rel="noopener noreferrer" class="link-inline">WEF Future of Jobs Report</a>).
            </p>
          </div>

          <!-- Why Human Skills Are Gaining Value -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-6">
              Why Human Skills Are <em>Gaining Value</em>, Not Losing It
            </h2>
            <p>
              It’s tempting to think AI makes human skills less important. The global economic data points firmly the other way:
            </p>
            <div class="space-y-4 my-6">
              <div class="brand-stat-item">
                <span class="stat-bullet">&bull;</span>
                <div>
                  <strong class="text-primary-contrast">Technology skills are the fastest-growing group, led by AI and big data.</strong>
                  <span class="text-muted-contrast block mt-0.5">Creative thinking, resilience, flexibility, agility, curiosity, and lifelong learning are rising directly alongside them (<a href="https://www.weforum.org/reports/the-future-of-jobs-report-2025/digest" target="_blank" rel="noopener noreferrer" class="link-inline">WEF</a>).</span>
                </div>
              </div>
              <div class="brand-stat-item">
                <span class="stat-bullet">&bull;</span>
                <div>
                  <strong class="text-primary-contrast">Workers with AI skills command a 56% wage premium.</strong>
                  <span class="text-muted-contrast block mt-0.5">This represents a massive surge from 25% just the year before (<a href="https://pwc.com/gx/en/news-room/press-releases/2025/ai-linked-to-a-fourfold-increase-in-productivity-growth.html" target="_blank" rel="noopener noreferrer" class="link-inline">PwC Research</a>).</span>
                </div>
              </div>
              <div class="brand-stat-item">
                <span class="stat-bullet">&bull;</span>
                <div>
                  <strong class="text-primary-contrast">Fastest-growing skills concentrate in 5 distinct stacks.</strong>
                  <span class="text-muted-contrast block mt-0.5">LinkedIn’s Skills on the Rise 2026 groups them into: AI and automation, data and analytics, IT and cybersecurity, business and growth, and people and leadership (<a href="https://www.deccanchronicle.com/jobs-and-education/most-sought-after-skills-in-india-1939538" target="_blank" rel="noopener noreferrer" class="link-inline">Deccan Chronicle</a>).</span>
                </div>
              </div>
            </div>

            <p class="p-4 rounded-xl border border-[#D9AA55]/30 bg-[#D9AA55]/5 font-medium text-primary-contrast">
              ✨ <strong>The pattern is clear:</strong> Employers are not choosing between technical AI skills and human skills. They pay the highest premium for people who integrate both.
            </p>
          </div>

          <!-- The 10 Skills Detailed Breakdown -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-8">
              The 10 Skills You Need to Succeed in an <em>AI-Driven World</em>
            </h2>

            <div class="space-y-8">
              
              <!-- Skill 1 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">01</span>
                  <div class="flex-1">
                    <span class="skill-tag">Mind Skills</span>
                    <h3 class="skill-title">Focused Attention: The Skill Underneath Every Other Skill</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> The ability to stay with one hard problem long enough to actually think it through.</p>
                  <p><strong>Why AI makes it more valuable:</strong> AI makes it easy to skip the struggle, and the struggle is where much of the learning happens. In an MIT Media Lab study, people who wrote essays with ChatGPT showed the weakest brain connectivity of three groups. People who wrote without tools showed the strongest (<a href="https://www.media.mit.edu/publications/your-brain-on-chatgpt/" target="_blank" rel="noopener noreferrer" class="link-inline">MIT Media Lab, 2025</a>). The researchers call this "cognitive debt".</p>
                  <p class="brand-caveat">
                    <em>A fair caveat:</em> The study was small (54 participants) and limited to essay writing. It shows a pattern worth taking seriously, not proof that AI damages your brain.
                  </p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Use a <strong>"brain first, AI second"</strong> rule. For any task that matters, spend 10 minutes writing your own rough answer before opening an AI tool. Then use AI to challenge and improve it, not to start it.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 2 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">02</span>
                  <div class="flex-1">
                    <span class="skill-tag">Mind Skills</span>
                    <h3 class="skill-title">Critical Thinking: Knowing When AI Is Wrong</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Questioning assumptions, checking evidence and deciding whether an answer is good enough to act on.</p>
                  <p><strong>Why AI makes it more valuable:</strong> AI produces confident answers, including wrong ones. A Microsoft Research and Carnegie Mellon study of 319 knowledge workers found that people who trusted AI more applied less critical thinking to its output. People more confident in their own skills applied more (<a href="https://campustechnology.com/articles/2025/02/21/study-generative-ai-could-inhibit-critical-thinking.aspx" target="_blank" rel="noopener noreferrer" class="link-inline">Campus Technology</a>). Critical thinking is now less about creating from scratch and more about verifying, refining, and deciding.</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Before you accept any important AI answer, ask three questions: <em>What is this based on? What would make it wrong? What’s missing?</em> Check one claim against an original primary source every time.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 3 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">03</span>
                  <div class="flex-1">
                    <span class="skill-tag">Adaptive Skills</span>
                    <h3 class="skill-title">AI Literacy: Directing and Checking AI Well</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Knowing what AI tools do well, where they fail, how to give clear instructions, and how to keep sensitive information safe.</p>
                  <p><strong>Why it matters now:</strong> This is where the measurable pay gap is (the 56% premium above). Microsoft's 2025 Work Trend Index predicts that every employee becomes an "agent boss"—someone who builds, delegates to, and manages AI agents (<a href="https://blogs.microsoft.com/blog/2025/04/23/the-2025-annual-work-trend-index-the-frontier-firm-is-born/" target="_blank" rel="noopener noreferrer" class="link-inline">Microsoft Work Trend Index</a>).</p>
                  <p>AI literacy is not the same as coding. For most professionals it means delegation and quality control: breaking work into clear tasks, giving context, and reviewing the output as a demanding manager would.</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Pick one repetitive task you do every week. Write clear instructions for an AI tool as if briefing a new junior colleague. Review the result against your own standard, and refine the instructions until the output is completely reliable.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 4 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">04</span>
                  <div class="flex-1">
                    <span class="skill-tag">Adaptive Skills</span>
                    <h3 class="skill-title">Creative Problem Framing: Asking the Right Question</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Defining the real problem before solving it, and seeing options that aren't obvious.</p>
                  <p><strong>Why AI makes it more valuable:</strong> AI is very good at answering questions. It's much weaker at knowing which question is worth asking. Creative thinking is among the top core skills employers named in the WEF report, cited by 57% of employers (<a href="https://www.fm-magazine.com/news/2025/feb/analytical-thinking-remains-top-core-skill-for-employers/" target="_blank" rel="noopener noreferrer" class="link-inline">FM Magazine</a>).</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Before solving any problem, write it three different ways. For example: <em>"How do we get more leads?"</em>, <em>"Why do good prospects stop replying?"</em>, and <em>"Who already trusts us that we never ask?"</em> Each version generates completely different strategic paths.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 5 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">05</span>
                  <div class="flex-1">
                    <span class="skill-tag">People Skills</span>
                    <h3 class="skill-title">Emotional Intelligence: Reading What Isn’t Said</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Noticing and managing your own emotions, and understanding what other people are feeling, including what they don't say out loud.</p>
                  <p><strong>Why AI makes it more valuable:</strong> AI can write an empathetic-sounding message. It cannot sit across from a worried team member and notice that "I'm fine" means the opposite. As routine work moves to machines, the work left for people is more often the human part: difficult conversations, trust and motivation.</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>After an important conversation, take two minutes to note: <em>what did I feel, what did they seem to feel, and what did I miss?</em> Over a few weeks, you'll start spotting emotional nuances in real time.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 6 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">06</span>
                  <div class="flex-1">
                    <span class="skill-tag">People Skills</span>
                    <h3 class="skill-title">Communication and Storytelling: Making Ideas Land</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Explaining an idea so that a specific person understands it, cares about it, and acts on it.</p>
                  <p><strong>Why AI makes it more valuable:</strong> When everyone can produce polished text in seconds, polish stops being impressive. What stands out is clarity, a real point of view, and knowing your audience. In LinkedIn's 2026 list for India, visual storytelling and collaboration are among the top five fastest-growing marketing skills (<a href="https://www.medianews4u.com/prompt-engineering-visual-storytelling-lead-linkedins-top-10-marketing-skills-on-the-rise-in-india-for-2026/" target="_blank" rel="noopener noreferrer" class="link-inline">MediaNews4U</a>).</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Before sending anything important, write its core message in one sentence. If you can't, the reader won't find it either. Then cut every line that doesn't actively support that single premise.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 7 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">07</span>
                  <div class="flex-1">
                    <span class="skill-tag">People Skills</span>
                    <h3 class="skill-title">Ethical Judgement and Accountability</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Weighing consequences, fairness and responsibility, and owning the decision once it's made.</p>
                  <p><strong>Why AI makes it more valuable:</strong> AI can recommend. It cannot be held responsible. In Workday's AI Skills Revolution research, leaders ranked ethical decision-making and moral judgement first among the skills they see as most valuable (<a href="https://blog.workday.com/en-au/human-skills-ai-cant-replace.html" target="_blank" rel="noopener noreferrer" class="link-inline">Workday Research</a>).</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>For any AI-assisted decision that affects people (hiring, pricing, feedback, sensitive communications), ask: <em>Who could this harm? Would I be comfortable publicly explaining how it was made? Who is accountable if it goes wrong?</em> If the answer to the last question is "the AI", stop and rethink immediately.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 8 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">08</span>
                  <div class="flex-1">
                    <span class="skill-tag">Adaptive Skills</span>
                    <h3 class="skill-title">Resilience, Flexibility and Agility</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Staying steady and effective when plans, tools and roles change, and recovering quickly from setbacks.</p>
                  <p><strong>Why AI makes it more valuable:</strong> It is the second most-cited core skill in the WEF report, named by 67% of employers (<a href="https://www.fm-magazine.com/news/2025/feb/analytical-thinking-remains-top-core-skill-for-employers/" target="_blank" rel="noopener noreferrer" class="link-inline">FM Magazine</a>). The WEF also found that resilience, flexibility, and agility are among the skills that most distinguish growing jobs from declining ones.</p>
                  <p>Resilience is not about pushing harder. Much of it comes from a mind that isn’t constantly overloaded. When change is constant, internal calm becomes a professional skill. (See also our guide on <NuxtLink to="/blog/can-ai-replace-human-coaches-in-2026" class="link-inline font-semibold">How to Stop Overthinking &amp; Reclaim Mental Clarity</NuxtLink>).</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Each week, name one change you’re resisting. Write what you can control in it and what you can't. Act on one controllable thing. Add a short daily practice (a few minutes of quiet breathing or reflection) that helps you reset instead of react.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 9 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">09</span>
                  <div class="flex-1">
                    <span class="skill-tag">Adaptive Skills</span>
                    <h3 class="skill-title">Learning Agility: Unlearning and Relearning Fast</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Picking up new skills quickly, and letting go of methods that no longer work.</p>
                  <p><strong>Why AI makes it more valuable:</strong> When 39% of core skills are expected to change by 2030, what you know today matters less than how quickly you can learn tomorrow. Curiosity and lifelong learning are on the WEF's list of skills rising sharply in importance.</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Run a <strong>30-day learning sprint</strong> on one skill tied to your current work. Learn for 20 minutes a day, apply it to a real work task by day 10, and teach it to a peer by day 30. Teaching reveals immediately what you haven't truly understood.</span>
                  </div>
                </div>
              </div>

              <!-- Skill 10 -->
              <div class="brand-skill-box">
                <div class="skill-header">
                  <span class="skill-num">10</span>
                  <div class="flex-1">
                    <span class="skill-tag">Mind Skills</span>
                    <h3 class="skill-title">Self-Awareness: Knowing What Only You Can Bring</h3>
                  </div>
                </div>
                <div class="skill-body">
                  <p><strong>What it is:</strong> Understanding your strengths, values, blind spots and habits, including your habits with technology.</p>
                  <p><strong>Why AI makes it more valuable:</strong> This is the skill that ties all others together. Remember the Microsoft and Carnegie Mellon finding: people confident in their own abilities thought more critically about AI output. Self-awareness tells you when to trust a tool, when to trust yourself, and what kind of work you want to do. Without it, it’s easy to drift into whatever the algorithm suggests. (Read our deep dive: <NuxtLink to="/blog/can-ai-replace-human-coaches-in-2026" class="link-inline font-semibold">Can AI Replace Human Coaches in 2026?</NuxtLink>).</p>
                  <div class="brand-practice-pill">
                    <span class="practice-label">How to Practise:</span>
                    <span>Spend 10 minutes each week on three questions: <em>Where did I add real value this week? Where did I hand over thinking I should have done myself? What do I want to get better at next?</em> Write the answers by hand in a journal.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- 30-Day Starting Plan Table -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-4">
              How to Build These Skills: <em>A 30-Day Starting Plan</em>
            </h2>
            <p class="text-primary-contrast mb-6">
              Ten skills at once is too many. Start with the foundational anchors that support everything else.
            </p>

            <div class="brand-table-wrap">
              <table class="brand-plan-table">
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Core Focus</th>
                    <th>Daily or Weekly Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="week-badge">Week 1</span></td>
                    <td><strong>Focused Attention</strong></td>
                    <td><strong>Brain first, AI second:</strong> 10 minutes of uninterrupted personal thinking before touching any AI tool.</td>
                  </tr>
                  <tr>
                    <td><span class="week-badge">Week 2</span></td>
                    <td><strong>Critical Thinking</strong></td>
                    <td>Ask the three critical questions of every important AI answer; verify at least one fact against primary sources.</td>
                  </tr>
                  <tr>
                    <td><span class="week-badge">Week 3</span></td>
                    <td><strong>AI Literacy</strong></td>
                    <td>Write, test, and refine explicit delegation instructions for one repetitive weekly operational task.</td>
                  </tr>
                  <tr>
                    <td><span class="week-badge">Week 4</span></td>
                    <td><strong>Self-Awareness</strong></td>
                    <td>10-minute handwritten weekly reflection; identify your next capability for a 30-day learning sprint.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="text-sm text-muted-contrast mt-3">
              This sequential order is intentional: <em>Attention</em> and <em>critical thinking</em> prevent AI from weakening your cognitive stamina. <em>AI literacy</em> turns the tool into leverage. <em>Self-awareness</em> governs what you build next.
            </p>
          </div>

          <!-- Interactive Rate Yourself Skills Check -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-3">
              Rate Yourself: <em>A Quick Skills Check</em>
            </h2>
            <p class="text-primary-contrast mb-6">
              Score yourself from 1 (rarely) to 5 (consistently) on each statement. Your lowest scores identify your highest-leverage starting points.
            </p>

            <div class="brand-table-wrap">
              <table class="brand-check-table">
                <thead>
                  <tr>
                    <th style="width:26%">Skill</th>
                    <th style="width:54%">Self-Check Statement</th>
                    <th style="width:20%; text-align:center">Score (1–5)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(check, idx) in skillChecks" :key="idx" :class="{ 'highlight-low': scores[idx] && scores[idx] <= 2 }">
                    <td class="font-semibold text-primary-contrast">
                      {{ check.skill }}
                    </td>
                    <td class="text-muted-contrast text-sm sm:text-base">
                      {{ check.statement }}
                    </td>
                    <td class="score-cell text-center">
                      <div class="score-buttons">
                        <button
                          v-for="val in [1, 2, 3, 4, 5]"
                          :key="val"
                          type="button"
                          @click="scores[idx] = val"
                          :class="['score-btn', scores[idx] === val ? 'active' : '']"
                        >
                          {{ val }}
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Score Summary Callout -->
            <div v-if="lowestSkills.length > 0" class="score-summary-callout mt-4 p-5 rounded-2xl border border-[#D9AA55]/40 bg-[#171B48]/40">
              <span class="text-xs font-bold uppercase tracking-wider text-[#F8D78B] block mb-1">Your Recommended Growth Priority:</span>
              <p class="text-sm text-primary-contrast m-0">
                Based on your ratings, prioritize strengthening: <strong class="text-[#F8D78B]">{{ lowestSkills.join(', ') }}</strong> over the next 30 days.
              </p>
            </div>
          </div>

          <!-- Common Mistakes to Avoid -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-6">
              Common Mistakes to <em>Avoid</em>
            </h2>

            <div class="space-y-4">
              <div class="brand-mistake-card">
                <span class="mistake-icon">⚠️</span>
                <div>
                  <strong class="text-primary-contrast">Learning only specific AI tools.</strong>
                  <p class="text-muted-contrast text-sm mt-1 mb-0">Tools and interfaces change every few months. The underlying human judgment to prompt, interrogate, and orchestrate them lasts for decades.</p>
                </div>
              </div>

              <div class="brand-mistake-card">
                <span class="mistake-icon">⚠️</span>
                <div>
                  <strong class="text-primary-contrast">Ignoring AI completely out of resistance.</strong>
                  <p class="text-muted-contrast text-sm mt-1 mb-0">Human skills without AI literacy leave you substantially slower than peers who combine both—a productivity gap reflected in the 56% wage premium.</p>
                </div>
              </div>

              <div class="brand-mistake-card">
                <span class="mistake-icon">⚠️</span>
                <div>
                  <strong class="text-primary-contrast">Letting AI do your first draft of thinking.</strong>
                  <p class="text-muted-contrast text-sm mt-1 mb-0">Using AI to initiate every thought creates cognitive debt and erodes the deep mental synthesis required to solve novel dilemmas.</p>
                </div>
              </div>

              <div class="brand-mistake-card">
                <span class="mistake-icon">⚠️</span>
                <div>
                  <strong class="text-primary-contrast">Treating soft skills as fixed, unchangeable traits.</strong>
                  <p class="text-muted-contrast text-sm mt-1 mb-0">Emotional intelligence, active listening, and calm resilience are neural muscles that expand with deliberate, micro-daily practice.</p>
                </div>
              </div>

              <div class="brand-mistake-card">
                <span class="mistake-icon">⚠️</span>
                <div>
                  <strong class="text-primary-contrast">Running on continuous neurological overload.</strong>
                  <p class="text-muted-contrast text-sm mt-1 mb-0">A perpetually rushed, overstimulated nervous system cannot sustain deep focus or creative intuition—the very capabilities AI cannot provide.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Frequently Asked Questions (FAQ) -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-6">
              Frequently Asked <em>Questions</em>
            </h2>

            <div class="space-y-4">
              <div
                v-for="(faq, fIdx) in faqs"
                :key="fIdx"
                class="brand-faq-item"
              >
                <button
                  type="button"
                  @click="toggleFaq(fIdx)"
                  class="brand-faq-btn"
                  :aria-expanded="openFaqs[fIdx]"
                >
                  <span class="font-semibold text-base sm:text-lg text-primary-contrast pr-4 text-left">
                    {{ faq.q }}
                  </span>
                  <span class="faq-icon" :class="{ 'open': openFaqs[fIdx] }">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div v-show="openFaqs[fIdx]" class="brand-faq-content">
                  <p class="text-muted-contrast text-sm sm:text-base leading-relaxed m-0">
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Conclusion -->
          <div class="section-block">
            <h2 class="text-2xl sm:text-3xl font-serif font-bold brand-gold-heading mb-6">
              Conclusion: The Sovereign Human Advantage
            </h2>
            <p>
              The most useful skill in an AI-driven world is not something a software tool can hand you. It is the ability to <strong>stay clear-headed, grounded, and sovereign</strong> while automated tools expand all around you.
            </p>
            <p>
              AI literacy gets you in the door, and employers are paying a significant premium for it. What keeps you indispensable is everything an algorithm cannot take responsibility for: focused attention, sound ethical judgment, somatic holding, emotional empathy, and knowing the irreplaceable value only you can bring.
            </p>
            <p>
              You don’t need to conquer all ten skills this week. Start with your two lowest scores from the self-check. Protect your attention, question what AI generates, and build steadily from there.
            </p>
          </div>

          <!-- Bottom Practical Workshop Banner -->
          <div class="brand-reset-box">
            <span class="brand-reset-pill">Practical Next Step</span>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-[#F8F5EF] mb-3">
              Quiet the Mental Noise in the <em>Clarity Reset Workshop</em>
            </h3>
            <p class="text-[#EAE2D4]/90 text-base max-w-xl mb-6 leading-relaxed">
              Many of these skills begin in the exact same place: a nervous system that isn’t constantly overloaded. If yours feels scattered right now, join our free, calm, guided session to step out of mental chatter and reclaim sovereign presence.
            </p>
            <div class="flex items-center gap-4 flex-wrap">
              <NuxtLink to="/workshops" class="btn-gold">
                Reserve Your Free Seat &rarr;
              </NuxtLink>
              <NuxtLink to="/coaching" class="btn-outline-gold">
                Explore 1-on-1 Clarity Coaching &rarr;
              </NuxtLink>
            </div>
          </div>

        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()

// Interactive Skill Rating State
const skillChecks = [
  { skill: 'Focused attention', statement: 'I can work on one hard task for 45 minutes without switching' },
  { skill: 'Critical thinking', statement: 'I check important AI answers before I use them' },
  { skill: 'AI literacy', statement: 'I can brief an AI tool clearly and judge its output' },
  { skill: 'Creative problem framing', statement: 'I question the problem before I start solving it' },
  { skill: 'Emotional intelligence', statement: 'I notice how others feel, even when they don’t say it' },
  { skill: 'Communication', statement: 'I can state my main point in one sentence' },
  { skill: 'Ethical judgement', statement: 'I know who is accountable for AI-assisted decisions I make' },
  { skill: 'Resilience', statement: 'I recover from setbacks within a day or two' },
  { skill: 'Learning agility', statement: 'I learned a genuinely new skill in the last six months' },
  { skill: 'Self-awareness', statement: 'I know what value I add that AI does not' }
]

const scores = ref<Record<number, number>>({})

const lowestSkills = computed(() => {
  const rated = Object.entries(scores.value)
    .filter(([_, score]) => score <= 2)
    .map(([idx]) => skillChecks[Number(idx)]?.skill)
    .filter(Boolean)
  return rated.slice(0, 3)
})

// FAQ Accordion State
const openFaqs = ref<Record<number, boolean>>({
  0: true,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
})

const toggleFaq = (idx: number) => {
  openFaqs.value[idx] = !openFaqs.value[idx]
}

const faqs = [
  {
    q: 'What skills can AI not replace?',
    a: 'AI cannot replace skills that depend on human judgement, relationships, and accountability. These include critical thinking, emotional intelligence, ethical decision-making, leadership, creative problem framing, and self-awareness. AI can support each one, but humans remain completely responsible for the outcome.'
  },
  {
    q: 'What are the most future-proof skills to learn?',
    a: 'The most future-proof combination pairs AI literacy with durable human skills: analytical and critical thinking, resilience, creative problem framing, and learning agility. The World Economic Forum names analytical thinking as the top core skill employers seek globally.'
  },
  {
    q: 'What skills should I learn in 2026?',
    a: 'Start with AI literacy (delegating to and auditing AI tools), critical thinking, and focused attention. Then add one skill tied directly to your domain. LinkedIn’s 2026 data shows surging demand for AI and automation, data intelligence, cybersecurity, business growth, and empathetic people leadership.'
  },
  {
    q: 'Why is emotional intelligence important in the age of AI?',
    a: 'As AI takes over repetitive analysis and drafting, more of the work left for people involves trust, psychological safety, conflict mediation, and difficult conversations. AI can generate caring words, but it cannot read the somatic tension in a room or take accountability for a relationship.'
  },
  {
    q: 'Does using AI make you worse at critical thinking?',
    a: 'It can, depending on how you use it. Research from Microsoft and Carnegie Mellon found that higher unquestioning trust in AI was linked to less critical thinking. An MIT study found lower brain engagement when people wrote with ChatGPT. Doing your own thinking first and then using AI to challenge and refine it protects against this cognitive debt.'
  },
  {
    q: 'Are soft skills really AI-proof?',
    a: 'No skill is completely insulated, and AI already assists with aspects of communication and drafting. However, skills that demand lived human context, emotional holding, moral accountability, and somatic presence are exceptionally difficult to automate. They also appreciate in value as routine tasks become free commodities.'
  }
]

useHead({
  title: '10 Skills You Need to Succeed in an AI-Driven World — Narayan Presence',
  meta: [
    { name: 'description', content: 'The skills AI can\'t replace, backed by WEF, PwC and MIT research, with a weekly practice for each. Build future-proof human and cognitive skills for the AI era.' },
    { name: 'keywords', content: 'skills you need in an ai driven world, skills needed in the age of ai, human skills in the age of ai, skills ai can\'t replace, human skills ai cannot replace, soft skills ai can\'t replace, ai proof skills, future proof skills, future ready skills, skills to learn in 2026, emotional intelligence in the age of ai, critical thinking skills for the ai era' },
    { property: 'og:title', content: '10 Skills You Need to Succeed in an AI-Driven World' },
    { property: 'og:description', content: 'The skills AI can\'t replace, backed by WEF, PwC and MIT research, with a weekly practice for each. Build future-proof skills for the AI era.' },
    { property: 'og:image', content: 'https://narayanpresence.com/images/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world.jpg' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '10 Skills You Need to Succeed in an AI-Driven World' },
    { name: 'twitter:description', content: 'The skills AI can\'t replace, backed by WEF, PwC and MIT research, with a weekly practice for each.' },
    { name: 'twitter:image', content: 'https://narayanpresence.com/images/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://narayanpresence.com/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world' },
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
            '@id': 'https://narayanpresence.com/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world#article',
            'headline': '10 Skills You Need to Succeed in an AI-Driven World',
            'description': 'The skills AI can\'t replace, backed by WEF, PwC and MIT research, with a weekly practice for each. Build future-proof skills for the AI era.',
            'image': 'https://narayanpresence.com/images/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world.jpg',
            'datePublished': '2026-11-25T00:00:00+05:30',
            'dateModified': '2026-11-25T14:40:00+05:30',
            'mainEntityOfPage': 'https://narayanpresence.com/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world',
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
                'url': 'https://narayanpresence.com/logo.png'
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
                'name': '10 Skills You Need to Succeed in an AI-Driven World',
                'item': 'https://narayanpresence.com/blog/10-skills-you-need-to-succeed-in-an-ai-driven-world'
              }
            ]
          },
          {
            '@type': 'FAQPage',
            'mainEntity': faqs.map(f => ({
              '@type': 'Question',
              'name': f.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': f.a
              }
            }))
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

/* Category Pill */
.brand-category-pill {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 9999px;
  background: #171B48;
  color: #F8D78B;
  border: 1px solid rgba(217, 170, 85, 0.45);
  box-shadow: 0 2px 8px rgba(15, 18, 51, 0.25);
}

/* Hero Typography */
.hero-article-title {
  margin-top: 18px;
  font-size: clamp(28px, 4.2vw, 50px);
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

.text-primary-contrast {
  color: var(--fg);
}

.text-muted-contrast {
  color: var(--muted);
}

/* Inline Links */
.link-inline {
  color: #7A5718;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;
}

:global(:root:not([data-theme="light"])) .link-inline,
:global([data-theme="dark"]) .link-inline {
  color: #F8D78B;
}

.link-inline:hover {
  color: #D9AA55;
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
  font-size: 20px;
  line-height: 1.6;
  color: var(--fg);
  margin: 0;
}

.brand-pullquote-mark {
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 60px;
  line-height: 1;
  color: #D9AA55;
  opacity: 0.3;
  font-family: 'Fraunces', Georgia, serif;
  pointer-events: none;
}

/* Executive Box */
.brand-executive-box {
  margin: 36px 0;
  padding: 32px 30px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(23, 27, 72, 0.04) 0%, rgba(217, 170, 85, 0.07) 100%);
  border: 1.5px solid rgba(217, 170, 85, 0.35);
  box-shadow: 0 12px 32px -8px rgba(23, 27, 72, 0.08);
  position: relative;
}

:global(:root:not([data-theme="light"])) .brand-executive-box,
:global([data-theme="dark"]) .brand-executive-box {
  background: linear-gradient(145deg, #171B48 0%, #0F1233 100%);
  border-color: rgba(217, 170, 85, 0.45);
  box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.5);
}

:global(:root:not([data-theme="light"])) .brand-executive-box p,
:global([data-theme="dark"]) .brand-executive-box p {
  color: #EAE2D4;
}

:global(:root:not([data-theme="light"])) .brand-executive-box strong,
:global([data-theme="dark"]) .brand-executive-box strong {
  color: #F8F5EF;
}

.brand-executive-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #171B48;
  background: #D9AA55;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 14px;
}

:global(:root:not([data-theme="light"])) .brand-executive-pill,
:global([data-theme="dark"]) .brand-executive-pill {
  color: #0F1233;
  background: #F8D78B;
}

/* Three Groups Grid */
.brand-group-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 22px;
  border-radius: 20px;
  background: #FFFFFF;
  border: 1.5px solid rgba(217, 170, 85, 0.45);
  box-shadow: 0 8px 24px -4px rgba(23, 27, 72, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

:global(:root:not([data-theme="light"])) .brand-group-card,
:global([data-theme="dark"]) .brand-group-card {
  background: linear-gradient(160deg, #1A1F52 0%, #10143B 100%);
  border-color: rgba(217, 170, 85, 0.4);
  box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.brand-group-card:hover {
  transform: translateY(-4px);
  border-color: #D9AA55;
  box-shadow: 0 16px 36px -8px rgba(23, 27, 72, 0.2), 0 0 20px rgba(217, 170, 85, 0.2);
}

.group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.group-badge {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 3px 10px;
  border-radius: 9999px;
  background: #171B48;
  color: #F8D78B;
  border: 1px solid rgba(217, 170, 85, 0.4);
}

:global(:root:not([data-theme="light"])) .group-badge,
:global([data-theme="dark"]) .group-badge {
  background: rgba(217, 170, 85, 0.18);
  color: #F8D78B;
  border-color: rgba(217, 170, 85, 0.5);
}

.group-icon {
  font-size: 20px;
  line-height: 1;
}

.group-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: #7A5718;
  margin-bottom: 8px;
}

:global(:root:not([data-theme="light"])) .group-title,
:global([data-theme="dark"]) .group-title {
  color: #F8D78B;
}

.group-sub {
  font-size: 14px;
  font-weight: 700;
  color: #171B48;
  line-height: 1.45;
  margin-bottom: 14px;
}

:global(:root:not([data-theme="light"])) .group-sub,
:global([data-theme="dark"]) .group-sub {
  color: #F8F5EF;
}

.group-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(217, 170, 85, 0.5) 0%, rgba(217, 170, 85, 0.05) 100%);
  margin-bottom: 14px;
}

.group-desc {
  font-size: 13.5px;
  color: #4A4B68;
  line-height: 1.6;
  margin: 0 !important;
  font-style: italic;
}

:global(:root:not([data-theme="light"])) .group-desc,
:global([data-theme="dark"]) .group-desc {
  color: #EAE2D4;
}

.gold-quote {
  color: #D9AA55;
  font-weight: 700;
  font-size: 16px;
}

:global(:root:not([data-theme="light"])) .gold-quote,
:global([data-theme="dark"]) .gold-quote {
  color: #F8D78B;
}

/* Stat Items */
.brand-stat-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(23, 27, 72, 0.03);
  border: 1px solid rgba(217, 170, 85, 0.2);
}

:global(:root:not([data-theme="light"])) .brand-stat-item,
:global([data-theme="dark"]) .brand-stat-item {
  background: rgba(23, 27, 72, 0.4);
  border-color: rgba(217, 170, 85, 0.2);
}

.stat-bullet {
  color: #D9AA55;
  font-size: 24px;
  line-height: 1;
}

/* Detailed Skill Box */
.brand-skill-box {
  border-radius: 20px;
  padding: 28px 26px;
  background: rgba(23, 27, 72, 0.03);
  border: 1px solid rgba(217, 170, 85, 0.25);
  transition: all 0.2s ease;
}

:global(:root:not([data-theme="light"])) .brand-skill-box,
:global([data-theme="dark"]) .brand-skill-box {
  background: rgba(23, 27, 72, 0.45);
  border-color: rgba(217, 170, 85, 0.22);
}

.skill-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(217, 170, 85, 0.2);
}

.skill-num {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #171B48;
  color: #F8D78B;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid rgba(217, 170, 85, 0.4);
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(15, 18, 51, 0.2);
}

.skill-tag {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #B8860B;
  display: inline-block;
  margin-bottom: 4px;
}

:global(:root:not([data-theme="light"])) .skill-tag,
:global([data-theme="dark"]) .skill-tag {
  color: #F8D78B;
}

.skill-title {
  font-size: 19px;
  font-weight: 700;
  font-family: 'Fraunces', Georgia, serif;
  color: var(--fg);
  line-height: 1.35;
  margin: 0;
}

.skill-body p {
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 14px;
}

.brand-caveat {
  font-size: 14px !important;
  color: var(--muted);
  padding: 10px 14px;
  border-radius: 10px;
  background: rgba(234, 226, 212, 0.4);
  border-left: 3px solid #D9AA55;
  margin: 14px 0 !important;
}

:global(:root:not([data-theme="light"])) .brand-caveat,
:global([data-theme="dark"]) .brand-caveat {
  background: rgba(15, 18, 51, 0.6);
}

.brand-practice-pill {
  margin-top: 18px;
  padding: 16px 20px;
  border-radius: 14px;
  background: rgba(217, 170, 85, 0.12);
  border: 1px solid rgba(217, 170, 85, 0.35);
  font-size: 15px;
  line-height: 1.65;
  color: var(--fg);
}

:global(:root:not([data-theme="light"])) .brand-practice-pill,
:global([data-theme="dark"]) .brand-practice-pill {
  background: rgba(23, 27, 72, 0.6);
}

.practice-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7A5718;
  margin-bottom: 4px;
}

:global(:root:not([data-theme="light"])) .practice-label,
:global([data-theme="dark"]) .practice-label {
  color: #F8D78B;
}

/* Tables */
.brand-table-wrap {
  overflow-x: auto;
  border-radius: 18px;
  border: 1.5px solid rgba(217, 170, 85, 0.3);
  box-shadow: 0 8px 24px -4px rgba(23, 27, 72, 0.08);
  margin: 24px 0;
}

.brand-plan-table,
.brand-check-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.brand-plan-table th,
.brand-check-table th {
  background: #171B48;
  color: #F8D78B;
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  text-align: left;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(217, 170, 85, 0.3);
}

.brand-plan-table td,
.brand-check-table td {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(217, 170, 85, 0.15);
  vertical-align: middle;
}

.brand-plan-table tr:nth-child(even),
.brand-check-table tr:nth-child(even) {
  background: rgba(234, 226, 212, 0.25);
}

:global(:root:not([data-theme="light"])) .brand-plan-table tr:nth-child(even),
:global(:root:not([data-theme="light"])) .brand-check-table tr:nth-child(even),
:global([data-theme="dark"]) .brand-plan-table tr:nth-child(even),
:global([data-theme="dark"]) .brand-check-table tr:nth-child(even) {
  background: rgba(23, 27, 72, 0.3);
}

.week-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  background: #171B48;
  color: #F8D78B;
  font-weight: 700;
  font-size: 12px;
  border: 1px solid rgba(217, 170, 85, 0.3);
}

/* Interactive Score Buttons */
.score-buttons {
  display: inline-flex;
  gap: 5px;
}

.score-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid rgba(217, 170, 85, 0.4);
  background: transparent;
  color: var(--fg);
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.score-btn:hover {
  background: rgba(217, 170, 85, 0.2);
}

.score-btn.active {
  background: #D9AA55;
  color: #0F1233;
  font-weight: 700;
  border-color: #D9AA55;
}

:global(:root:not([data-theme="light"])) .score-btn.active,
:global([data-theme="dark"]) .score-btn.active {
  background: #F8D78B;
  color: #0F1233;
  border-color: #F8D78B;
}

.highlight-low {
  background: rgba(217, 170, 85, 0.12) !important;
}

/* Common Mistakes Cards */
.brand-mistake-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 16px;
  background: rgba(23, 27, 72, 0.03);
  border: 1px solid rgba(217, 170, 85, 0.25);
}

:global(:root:not([data-theme="light"])) .brand-mistake-card,
:global([data-theme="dark"]) .brand-mistake-card {
  background: rgba(23, 27, 72, 0.4);
  border-color: rgba(217, 170, 85, 0.2);
}

.mistake-icon {
  font-size: 20px;
  line-height: 1;
}

/* FAQ Accordions */
.brand-faq-item {
  border-radius: 16px;
  border: 1.5px solid rgba(217, 170, 85, 0.28);
  overflow: hidden;
  background: rgba(23, 27, 72, 0.03);
  transition: border-color 0.2s ease;
}

:global(:root:not([data-theme="light"])) .brand-faq-item,
:global([data-theme="dark"]) .brand-faq-item {
  background: rgba(23, 27, 72, 0.45);
  border-color: rgba(217, 170, 85, 0.25);
}

.brand-faq-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(217, 170, 85, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D9AA55;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

:global(:root:not([data-theme="light"])) .faq-icon,
:global([data-theme="dark"]) .faq-icon {
  color: #F8D78B;
}

.faq-icon.open {
  transform: rotate(180deg);
  background: #171B48;
}

.brand-faq-content {
  padding: 0 22px 22px 22px;
  border-top: 1px solid rgba(217, 170, 85, 0.15);
  padding-top: 16px;
}

/* Workshop CTA Banner */
.brand-reset-box {
  margin-top: 48px;
  padding: 40px 36px;
  border-radius: 24px;
  background: linear-gradient(135deg, #171B48 0%, #0F1233 100%);
  border: 1.5px solid rgba(217, 170, 85, 0.35);
  box-shadow: 0 20px 48px -12px rgba(15, 18, 51, 0.45);
  position: relative;
  overflow: hidden;
}

.brand-reset-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0F1233;
  background: #F8D78B;
  padding: 4px 14px;
  border-radius: 9999px;
  margin-bottom: 14px;
}

.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #D9AA55 0%, #C4953E 100%);
  color: #0F1233 !important;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(217, 170, 85, 0.35);
  transition: all 0.2s ease;
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(217, 170, 85, 0.5);
  background: linear-gradient(135deg, #F8D78B 0%, #D9AA55 100%);
}

.btn-outline-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #F8D78B !important;
  border: 1.5px solid rgba(217, 170, 85, 0.6);
  font-weight: 700;
  font-size: 15px;
  padding: 11px 22px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-outline-gold:hover {
  border-color: #F8D78B;
  background: rgba(217, 170, 85, 0.15);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .hero-article-title {
    font-size: 28px;
  }
  .brand-pullquote {
    padding: 18px 20px;
  }
  .brand-pullquote p {
    font-size: 17px;
  }
  .brand-skill-box {
    padding: 20px 18px;
  }
  .brand-reset-box {
    padding: 28px 20px;
  }
  .brand-plan-table td,
  .brand-check-table td {
    padding: 12px 14px;
  }
  .score-btn {
    width: 24px;
    height: 24px;
    font-size: 11px;
  }
}
</style>
