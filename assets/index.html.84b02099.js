const e=JSON.parse(`{"key":"v-278e8fc5","path":"/docs/launch-manual/sections/core-hacking/","title":"Hacking the Core","lang":"en-US","frontmatter":{"lang":"en-US","title":"Hacking the Core","description":"Info on building from source + hacking on Pulsar's core"},"excerpt":"","headers":[{"level":2,"title":"Building Pulsar","slug":"building-pulsar","link":"#building-pulsar","children":[{"level":3,"title":"Requirements and dependencies","slug":"requirements-and-dependencies","link":"#requirements-and-dependencies","children":[]},{"level":3,"title":"Building and running the application","slug":"building-and-running-the-application","link":"#building-and-running-the-application","children":[]},{"level":3,"title":"Building binaries","slug":"building-binaries","link":"#building-binaries","children":[]}]},{"level":2,"title":"Using ppm (Pulsar Package Manager)","slug":"using-ppm-pulsar-package-manager","link":"#using-ppm-pulsar-package-manager","children":[]},{"level":2,"title":"Hacking on the Core","slug":"hacking-on-the-core","link":"#hacking-on-the-core","children":[{"level":3,"title":"Running in Development Mode","slug":"running-in-development-mode","link":"#running-in-development-mode","children":[]},{"level":3,"title":"Running Pulsar Core Tests Locally","slug":"running-pulsar-core-tests-locally","link":"#running-pulsar-core-tests-locally","children":[]}]},{"level":2,"title":"Tools of the Trade","slug":"tools-of-the-trade","link":"#tools-of-the-trade","children":[]},{"level":2,"title":"The Init File","slug":"the-init-file","link":"#the-init-file","children":[]},{"level":2,"title":"Package: Word Count","slug":"package-word-count","link":"#package-word-count","children":[{"level":3,"title":"Package Generator","slug":"package-generator","link":"#package-generator","children":[]},{"level":3,"title":"Developing Our Package","slug":"developing-our-package","link":"#developing-our-package","children":[]},{"level":3,"title":"Basic Debugging","slug":"basic-debugging","link":"#basic-debugging","children":[]},{"level":3,"title":"Testing","slug":"testing","link":"#testing","children":[]},{"level":3,"title":"Summary","slug":"summary","link":"#summary","children":[]}]},{"level":2,"title":"Package: Modifying Text","slug":"package-modifying-text","link":"#package-modifying-text","children":[{"level":3,"title":"Basic Text Insertion","slug":"basic-text-insertion","link":"#basic-text-insertion","children":[]},{"level":3,"title":"Add the ASCII Art","slug":"add-the-ascii-art","link":"#add-the-ascii-art","children":[]},{"level":3,"title":"Summary","slug":"summary-1","link":"#summary-1","children":[]}]},{"level":2,"title":"Package: Active Editor Info","slug":"package-active-editor-info","link":"#package-active-editor-info","children":[{"level":3,"title":"Create the Package","slug":"create-the-package","link":"#create-the-package","children":[]},{"level":3,"title":"Add an Opener","slug":"add-an-opener","link":"#add-an-opener","children":[]},{"level":3,"title":"Updating the View","slug":"updating-the-view","link":"#updating-the-view","children":[]},{"level":3,"title":"Constraining Our Item's Locations","slug":"constraining-our-item-s-locations","link":"#constraining-our-item-s-locations","children":[]},{"level":3,"title":"Show Active Editor Info","slug":"show-active-editor-info","link":"#show-active-editor-info","children":[]},{"level":3,"title":"Serialization","slug":"serialization","link":"#serialization","children":[]},{"level":3,"title":"Summary","slug":"summary-2","link":"#summary-2","children":[]}]},{"level":2,"title":"Creating a Theme","slug":"creating-a-theme","link":"#creating-a-theme","children":[{"level":3,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[]},{"level":3,"title":"Creating a Syntax Theme","slug":"creating-a-syntax-theme","link":"#creating-a-syntax-theme","children":[]},{"level":3,"title":"Creating a UI Theme","slug":"creating-a-ui-theme","link":"#creating-a-ui-theme","children":[]},{"level":3,"title":"Theme Variables","slug":"theme-variables","link":"#theme-variables","children":[]},{"level":3,"title":"Development workflow","slug":"development-workflow","link":"#development-workflow","children":[]},{"level":3,"title":"Publish your theme","slug":"publish-your-theme","link":"#publish-your-theme","children":[]}]},{"level":2,"title":"Creating a Grammar","slug":"creating-a-grammar","link":"#creating-a-grammar","children":[{"level":3,"title":"Getting Started","slug":"getting-started-1","link":"#getting-started-1","children":[]},{"level":3,"title":"The Parser","slug":"the-parser","link":"#the-parser","children":[]},{"level":3,"title":"The Package","slug":"the-package","link":"#the-package","children":[]},{"level":3,"title":"The Grammar File","slug":"the-grammar-file","link":"#the-grammar-file","children":[]},{"level":3,"title":"Basic Fields","slug":"basic-fields","link":"#basic-fields","children":[]},{"level":3,"title":"Language Recognition","slug":"language-recognition","link":"#language-recognition","children":[]},{"level":3,"title":"Syntax Highlighting","slug":"syntax-highlighting","link":"#syntax-highlighting","children":[]},{"level":3,"title":"Language Injection","slug":"language-injection","link":"#language-injection","children":[]},{"level":3,"title":"Code Folding","slug":"code-folding","link":"#code-folding","children":[]},{"level":3,"title":"Comments","slug":"comments","link":"#comments","children":[]},{"level":3,"title":"Example Packages","slug":"example-packages","link":"#example-packages","children":[]}]},{"level":2,"title":"Creating a Legacy TextMate Grammar","slug":"creating-a-legacy-textmate-grammar","link":"#creating-a-legacy-textmate-grammar","children":[{"level":3,"title":"Getting Started","slug":"getting-started-2","link":"#getting-started-2","children":[]},{"level":3,"title":"Create the Package","slug":"create-the-package-1","link":"#create-the-package-1","children":[]},{"level":3,"title":"Adding Patterns","slug":"adding-patterns","link":"#adding-patterns","children":[]},{"level":3,"title":"Begin/End Patterns","slug":"begin-end-patterns","link":"#begin-end-patterns","children":[]},{"level":3,"title":"Repositories and the Include keyword, or how to avoid duplication","slug":"repositories-and-the-include-keyword-or-how-to-avoid-duplication","link":"#repositories-and-the-include-keyword-or-how-to-avoid-duplication","children":[]},{"level":3,"title":"Where to Go from Here","slug":"where-to-go-from-here","link":"#where-to-go-from-here","children":[]}]},{"level":2,"title":"Converting from TextMate","slug":"converting-from-textmate","link":"#converting-from-textmate","children":[{"level":3,"title":"Converting a TextMate Grammar Bundle","slug":"converting-a-textmate-grammar-bundle","link":"#converting-a-textmate-grammar-bundle","children":[]},{"level":3,"title":"Converting a TextMate Syntax Theme","slug":"converting-a-textmate-syntax-theme","link":"#converting-a-textmate-syntax-theme","children":[]}]},{"level":2,"title":"Publishing","slug":"publishing","link":"#publishing","children":[{"level":3,"title":"Prepare Your Package","slug":"prepare-your-package","link":"#prepare-your-package","children":[]},{"level":3,"title":"Publish Your Package","slug":"publish-your-package","link":"#publish-your-package","children":[]}]},{"level":2,"title":"Iconography","slug":"iconography","link":"#iconography","children":[{"level":3,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Size","slug":"size","link":"#size","children":[]},{"level":3,"title":"Usability","slug":"usability","link":"#usability","children":[]}]},{"level":2,"title":"Debugging","slug":"debugging","link":"#debugging","children":[{"level":3,"title":"Update to the Latest Version","slug":"update-to-the-latest-version","link":"#update-to-the-latest-version","children":[]},{"level":3,"title":"Using Safe Mode","slug":"using-safe-mode","link":"#using-safe-mode","children":[]},{"level":3,"title":"Clearing Saved State","slug":"clearing-saved-state","link":"#clearing-saved-state","children":[]},{"level":3,"title":"Reset to Factory Defaults","slug":"reset-to-factory-defaults","link":"#reset-to-factory-defaults","children":[]},{"level":3,"title":"Check for Linked Packages","slug":"check-for-linked-packages","link":"#check-for-linked-packages","children":[]},{"level":3,"title":"Check for Incompatible Packages","slug":"check-for-incompatible-packages","link":"#check-for-incompatible-packages","children":[]},{"level":3,"title":"Check Pulsar and Package Settings","slug":"check-pulsar-and-package-settings","link":"#check-pulsar-and-package-settings","children":[]},{"level":3,"title":"Check Your Configuration","slug":"check-your-configuration","link":"#check-your-configuration","children":[]},{"level":3,"title":"Check Your Keybindings","slug":"check-your-keybindings","link":"#check-your-keybindings","children":[]},{"level":3,"title":"Check Font Rendering Issues","slug":"check-font-rendering-issues","link":"#check-font-rendering-issues","children":[]},{"level":3,"title":"Check for Errors in the Developer Tools","slug":"check-for-errors-in-the-developer-tools","link":"#check-for-errors-in-the-developer-tools","children":[]},{"level":3,"title":"Find Crash Logs","slug":"find-crash-logs","link":"#find-crash-logs","children":[]},{"level":3,"title":"Diagnose Startup Performance","slug":"diagnose-startup-performance","link":"#diagnose-startup-performance","children":[]},{"level":3,"title":"Diagnose Runtime Performance","slug":"diagnose-runtime-performance","link":"#diagnose-runtime-performance","children":[]},{"level":3,"title":"Profiling Startup Performance","slug":"profiling-startup-performance","link":"#profiling-startup-performance","children":[]},{"level":3,"title":"Check Your Build Tools","slug":"check-your-build-tools","link":"#check-your-build-tools","children":[]},{"level":3,"title":"Check if your GPU is causing the problem","slug":"check-if-your-gpu-is-causing-the-problem","link":"#check-if-your-gpu-is-causing-the-problem","children":[]}]},{"level":2,"title":"Writing Specs","slug":"writing-specs","link":"#writing-specs","children":[{"level":3,"title":"Create a New Spec","slug":"create-a-new-spec","link":"#create-a-new-spec","children":[]},{"level":3,"title":"Asynchronous Specs","slug":"asynchronous-specs","link":"#asynchronous-specs","children":[]},{"level":3,"title":"Running Specs","slug":"running-specs","link":"#running-specs","children":[]},{"level":3,"title":"Customizing your test runner","slug":"customizing-your-test-runner","link":"#customizing-your-test-runner","children":[]}]},{"level":2,"title":"Handling URIs","slug":"handling-uris","link":"#handling-uris","children":[{"level":3,"title":"Modifying your package.json","slug":"modifying-your-package-json","link":"#modifying-your-package-json","children":[]},{"level":3,"title":"Modifying your Main Module","slug":"modifying-your-main-module","link":"#modifying-your-main-module","children":[]},{"level":3,"title":"Controlling Activation Deferral","slug":"controlling-activation-deferral","link":"#controlling-activation-deferral","children":[]},{"level":3,"title":"Linux Support","slug":"linux-support","link":"#linux-support","children":[]}]},{"level":2,"title":"Core URIs","slug":"core-uris","link":"#core-uris","children":[{"level":3,"title":"Cross-Platform Compatibility","slug":"cross-platform-compatibility","link":"#cross-platform-compatibility","children":[]}]},{"level":2,"title":"Contributing to Official Pulsar Packages","slug":"contributing-to-official-pulsar-packages","link":"#contributing-to-official-pulsar-packages","children":[{"level":3,"title":"Hacking on Packages","slug":"hacking-on-packages","link":"#hacking-on-packages","children":[]}]},{"level":2,"title":"Creating a Fork of a Core Package","slug":"creating-a-fork-of-a-core-package","link":"#creating-a-fork-of-a-core-package","children":[{"level":3,"title":"Creating Your New Package","slug":"creating-your-new-package","link":"#creating-your-new-package","children":[]},{"level":3,"title":"Merging Upstream Changes into Your Package","slug":"merging-upstream-changes-into-your-package","link":"#merging-upstream-changes-into-your-package","children":[]}]},{"level":2,"title":"Maintaining a Fork of a Core Package","slug":"maintaining-a-fork-of-a-core-package","link":"#maintaining-a-fork-of-a-core-package","children":[{"level":3,"title":"Step-by-step guide","slug":"step-by-step-guide","link":"#step-by-step-guide","children":[]}]},{"level":2,"title":"Summary","slug":"summary-3","link":"#summary-3","children":[]},{"level":2,"title":"Having trouble?","slug":"having-trouble","link":"#having-trouble","children":[]}],"git":{"createdTime":1663961800000,"updatedTime":1670466847000,"contributors":[{"name":"Daeraxa","email":"58074586+Daeraxa@users.noreply.github.com","commits":3},{"name":"Josh","email":"16845458+kaosine@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"docs/launch-manual/sections/core-hacking/index.md","localizedDate":"September 23, 2022"}`);export{e as data};