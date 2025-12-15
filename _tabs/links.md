---
layout: post
title: Links
icon: fas fa-link
order: 5
toc: true
# show_meta: false
---

<link rel="stylesheet" href="{{ '/assets/css/link_page_style.css' | relative_url }}">


Start here: <a href="https://g4m.code4math.org/g4m.html" target="_blank">GitHub for mathematicians</a>
## Arxiv

I wrote a bot that sends me readable HTML-formatted emails with my arXiV subscriptions. To fork it and get it running for your own purposes, see the repository here: <a href="https://github.com/tbrazel/arxiv-email" target="_blank">https://github.com/tbrazel/arxiv-email</a>.

## GitHub
To host a LaTeX project on GitHub, I use <a href="https://pbelmans.ncag.info/blog/2023/08/17/github-latex-template/" target="_blank">this setup</a> by Pieter Belmans. This uses workflows to build a pdf on push, and compiles the pdf to an orphaned branch so that the repository contains an updated pdf without it being tracked. With <a href="gitignore.txt" target="_blank">the right .gitignore</a>, the only changes tracked by GitHub are to the .tex files themselves, which makes collaboration and version control really easy. Some other stuff for this workflow:

<ul>
    <li><a href="https://github.com/sbarex/QLMarkdown" target="_blank">QLMarkdown</a> - for Mac users, can render Markdown files in "Quick Look" view, i.e. by hitting the space bar when navigating over the file in Finder</li>
    <li><a href="https://itnext.io/how-to-use-github-desktop-with-gitlab-cd4d2de3d104" target="_blank">How to use GitHub Desktop with GitLab</a></li>
    <li><a href="https://gist.github.com/jagrosh/5b1761213e33fc5b54ec7f6379034a22" target="_blank">Make a Discord webhook on GitHub</a> - for sending GitHub updates in a Discord channel</li>
</ul>

## LaTeX
I use a Vim setup with <a href="https://github.com/SirVer/ultisnips" target="_blank">UltiSnips</a>, which uses Python and Regex for macros in writing LaTeX. <!--My snippets files are available here: <a href="https://github.com/tbrazel/vim-latex-snippets" target="_blank">https://github.com/tbrazel/vim-latex-snippets</a>.-->


<!-- 				<h2>Macaulay2</h2>
The best way to run Macaulay2 is <a href="https://macaulay2.com/doc/Macaulay2/share/doc/Macaulay2/Macaulay2Doc/html/_setting_spup_spthe_sp__Macaulay2_spemacs_spinterface.html" target="_blank">through Emacs</a>. -->

## Website hosting
This website is hosted on GitHub - if you're not sure how to start a "username.io" website, there's a <a href="https://pages.github.com/" target="_blank">good reference to get started here</a>. If you want to host your academic website on your department's server, for example, but you'd still like version control (and you don't want to use an app like Fetch or Cyberduck every time you want to update your website), I recommend using a third-party service like <a href="https://www.deployhq.com/" target="_blank">DeployHQ</a>, which links a GitHub repository to your SFTP credentials. This way every time you want to update your webpage, just commit to your repository, and DeployHQ will launch it for you.

## Keeping track of math papers
I use <a href="https://www.zotero.org/" target="_blank">Zotero</a> to organize math papers. If you make sure the automatic importing gets accurate metadata, this makes it really easy to quickly generate BibTex citations for papers you're working with. 
<ul>
    <li>See here for a guide on <a href="https://libguides.rhul.ac.uk/referencing/Zoterolatex" target="_blank">using BibTex and Zotero</a>.</li>
    <li><a href="https://retorque.re/zotero-better-bibtex/citing/#set-your-own-fixed-citation-keys">Using custom citation keys with BBT in Zotero</a></li>
    <li><a href="https://mathscinet.ams.org/msnhtml/serials.pdf">List of math journal abbreviations</a></li>
</ul>

## References

## Listservs
<ul>
    <li>
        <a href="https://lists.illinois.edu/lists/info/algtop-l" target="_blank">Algtop-L</a>, algebraic topology listserv
    </li>
    <li>
        <a href="https://www.listserv.dfn.de/sympa/info/eager-gen" target="_blank">eager-gen</a>, algebraic geometry listserv
    </li>
        
    
</ul>

## Algebraic databases

<ul>
    <li><a href="https://ringtheory.herokuapp.com/" target="_blank">Database of Ring Theory</a></li>
    <li><a href="https://smallcats.info/" target="_blank">SmallCategories</a></li>
    <li><a href="https://brauer.maths.qmul.ac.uk/Atlas/v3/">Atlas of Finite Simple Groups</a></li>
    <li><a href="https://people.maths.bris.ac.uk/~matyd/GroupNames/index.html">GroupNames</a></li>
    <li><a href="https://docs.gap-system.org/pkg/smallgrp/doc/chap1.html" target="_blank">Small Groups Library</a> in GAP </li>
    <li>
        <a href="https://www.fanography.info/" target="_blank">Fano threefolds</a>
    </li>
    <li>
        <a href="https://www.grassmannian.info/" target="_blank">Grassmannians</a>
    </li>
</ul>

Even more databases here! <a href="https://mathbases.org/">mathbases.org</a>

## Web apps for typesetting stuff

- [Quiver](https://q.uiver.app/) for Tikz commutative diagrams
- [homotopy.io](https://beta.homotopy.io/) for building cell diagrams





## Things I frequently need to copy/paste

<a href="gitignore.txt">a .gitignore file for LaTeX projects</a><br>

<a href="regex.txt">regex for math mode and prose snippets</a><br>
	