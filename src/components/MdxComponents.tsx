'use client'

import * as runtime from 'react/jsx-runtime'
import NextImage from 'next/image'
import type { ComponentPropsWithoutRef } from 'react'

const components = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="text-3xl font-bold tracking-tight mt-10 mb-4 text-foreground"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="text-2xl font-semibold mt-10 mb-3 pb-2 border-b border-border text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="text-xl font-semibold mt-8 mb-2 text-foreground"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-base font-semibold mt-6 mb-2 text-foreground" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="leading-7 text-muted-foreground mb-4" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-outside pl-5 space-y-1.5 mb-4 text-muted-foreground" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-outside pl-5 space-y-1.5 mb-4 text-muted-foreground" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic text-muted-foreground" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="bg-muted border border-border rounded px-1.5 py-0.5 text-sm font-mono text-foreground"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="bg-card border border-border rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="border-l-2 border-border pl-4 italic text-muted-foreground my-6"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="border-border my-8" {...props} />
  ),
  img: ({ src, alt }: ComponentPropsWithoutRef<'img'>) => (
    <span className="block my-8 rounded-lg overflow-hidden border border-border">
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
