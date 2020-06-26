import Layout  from '../components/layout';
import PropTypes from "prop-types";
import React from 'react';
import SEO from '../components/seo';
import { Link } from "gatsby";

const BlogPostTemplate = ({ pageContext: { frontmatter, html, next, previous }, location }) => {
  const { date, description, title } = frontmatter;
  const postDate = new Date(date).toDateString();

  return (
    <Layout location={ location }>
      <SEO title={title} description={description} />
      <article className="container mx-6 lg:mx-auto">
        <div className="blog-post">
          <header className="mb-4">
            <h1 className="font-black font-header text-4xl">{ title }</h1>
            <time className="font-text text-xs">{ postDate }</time>
          </header>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="my-8">
          <ul className="flex justify-between">
            <li>
              {previous && (
                <Link className="bg-yellow p-1" to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className="bg-yellow p-1" to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.object
};

export default BlogPostTemplate;
