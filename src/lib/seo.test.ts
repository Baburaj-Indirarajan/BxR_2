import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { absoluteUrl, clipMeta, pageTitle } from './seo.ts';

describe('pageTitle', () => {
  it('joins page and studio name', () => {
    assert.equal(pageTitle('About', 'BXR Architect'), 'About | BXR Architect');
  });

  it('uses name and tagline when page is empty', () => {
    assert.equal(
      pageTitle('', 'BXR Architect', 'Space, soul, story'),
      'BXR Architect | Space, soul, story',
    );
  });
});

describe('absoluteUrl', () => {
  it('builds a canonical path from origin', () => {
    assert.equal(
      absoluteUrl('/projects/courtyard-house', 'https://bxr-architect.vercel.app'),
      'https://bxr-architect.vercel.app/projects/courtyard-house',
    );
  });
});

describe('clipMeta', () => {
  it('keeps short descriptions intact', () => {
    assert.equal(clipMeta('A family house around a court.'), 'A family house around a court.');
  });

  it('clips long text on a word boundary', () => {
    const long = 'A '.repeat(120);
    const result = clipMeta(long, 160);
    assert.ok(result.length <= 160);
    assert.ok(result.endsWith('…'));
  });
});
