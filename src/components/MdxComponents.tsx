'use client'

import * as runtime from 'react/jsx-runtime'
import NextImage from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

const components = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="font-serif text-4xl font-normal tracking-tight mt-12 mb-5 text-foreground"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="font-serif text-3xl font-normal mt-12 mb-4 text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="font-serif text-2xl font-normal mt-10 mb-3 text-foreground"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4
      className="font-serif text-xl font-normal mt-8 mb-2 text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p
      className="font-serif text-[1.0625rem] leading-[1.85] text-foreground mb-6"
      {...props}
    />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className="font-serif list-disc list-outside pl-6 space-y-2 mb-6 text-foreground text-[1.0625rem] leading-[1.85]"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className="font-serif list-decimal list-outside pl-6 space-y-2 mb-6 text-foreground text-[1.0625rem] leading-[1.85]"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="leading-[1.85]" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="bg-muted border border-border rounded px-1.5 py-0.5 text-sm font-mono text-foreground"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="bg-card border border-border rounded-lg p-4 overflow-x-auto mb-6 text-sm font-mono"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="font-serif italic text-[1.0625rem] leading-[1.85] border-l-2 border-border pl-5 text-muted-foreground my-8"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="border-border my-10" {...props} />
  ),
  img: ({ src, alt }: ComponentPropsWithoutRef<'img'>) => (
    <span className="block my-10 rounded-lg overflow-hidden border border-border">
      <NextImage
        src={typeof src === 'string' ? src : ''}
        alt={alt ?? ''}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </span>
  ),
}

function useMDXComponent(code: string) {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXContentProps {
  code: string
  extraComponents?: Record<string, React.ComponentType<unknown>>
}

export function MDXContent({ code, extraComponents }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components, ...extraComponents }} />
}
