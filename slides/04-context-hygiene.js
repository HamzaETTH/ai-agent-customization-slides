window.slides.push(`
<section class="slide slide-4">
  <div class="left">
    <div class="eyebrow reveal d1">
      <span class="dot"></span>
      CONTEXT MANAGEMENT
      <span class="slash">/</span>
      DEBUGGING
    </div>

    <h1 class="title reveal d2">
      <span class="file">Context hygiene:</span><br>
      fork or hand off before the noise
    </h1>

    <div class="title-rule reveal d3"></div>

    <ul class="points">
      <li class="reveal d3">
        <span class="num">01</span>
        <div>
          <span class="label">Long debug chats accumulate noise</span>
        </div>
      </li>
      <li class="reveal d4">
        <span class="num">02</span>
        <div>
          <span class="label">Fork before the bad path grows</span>
        </div>
      </li>
      <li class="reveal d5">
        <span class="num">03</span>
        <div>
          <span class="label">Use handoff notes to restart cleanly</span>
        </div>
      </li>
    </ul>
  </div>

  <div class="stage reveal">
    <div class="frame">
      <span class="badge"><span class="pulse"></span>CONTEXT HYGIENE</span>
      <img src="images/noise.png" alt="Context hygiene debugging workflow visual">
    </div>
  </div>

  <div class="footer">
    <div class="src">
      <span>Practical workflow concept: fork / handoff / fresh chat for better context management</span>
      <span>Example skill - <a href="https://github.com/willseltzer/claude-handoff/blob/main/skills/handoff/SKILL.md" target="_blank" rel="noopener">github.com/willseltzer/claude-handoff/.../SKILL.md</a></span>
    </div>
    <div class="page"></div>
  </div>
</section>
`);
