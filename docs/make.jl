using DocumenterVitepress ## add https://github.com/LuxDL/DocumenterVitepress.jl.git
using Documenter
using Makie

makedocs(; sitename="MakieDocs", authors="makie.org",
    # modules=[Makie],
    # checkdocs=:all,
    format=DocumenterVitepress.MarkdownVitepress(),
    draft=false,
    source="src", build=joinpath(@__DIR__, "docs_site"))