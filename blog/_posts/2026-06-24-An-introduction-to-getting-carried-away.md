---
layout: post
title: "An introduction to getting carried away"
date: 2026-06-24
use_mathjax: true
---
I began writing a post about my experience rendering weak gravitational lensing about a Schwarzschild black hole, and ended up getting carried away. In this post, I'm going to introduce some jargon and blah blah that the interested reader may find useful when reading the imminent(!!!) *carried away* follow up posts.

In physics, particularly general relativity (GR), we often use the term *spacetime* and can communicate quite a bit of information through laundering symbols with terminology; i.e. spacetime is sort of a slang term for the spacetime metric, which is to say, how one measures distances and elapsed times. We are now at a point where I reluctantly choose to disappoint some mathematicians by hiding some magic behind the curtains (the rabbit was always in the hat!).

In special relativity (SR), Einstein proposed (try to prove him wrong 😉) the universe has a speed limit, $c$, and light travels at this exact(ish) speed limit $c$ in massless packets. There is a thing called the *interval* often written in the form

$$ds^2 = - (c \,dt)^2 + dx^2 + dy^2 + dz^2 \tag{1}$$

which is an invariant in SR, meaning that whenever we make transformations that respect the symmetries in SR, the interval remains the same. Anyone measuring the interval will measure the same thing, no matter where or when they are. Invariants like this are how we are able to make predictions with our theory and compare them with data from physical experiments. Minkowski introduced the Minkowski metric $\eta_{\mu \nu}$ which greatly enables the study of SR through linear algebra and geometry (you might just say differential geometry). Of course in physics to keep things confusing we have all sorts of ways to write down the same thing, with jarring conventional differences that are incredibly common: two such ways to write down the Minkowski metric are

$$\eta_{\mu \nu} = \begin{pmatrix} -c & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \quad \text{or} \quad \eta_{\mu \nu} = \begin{pmatrix} c & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}$$

Pretty cool, right? So, for our purposes, let's choose the $\eta_{\mu \nu}$ on the left as our convention and move along. Note the interval (or *line element*) $ds^2$ above is the *Minkowski interval*; we see many different $ds^2$ in GR.

Suppose we live in a 3+1 dimensional spacetime and are interested in understanding it more *deeply* on a fundamental level. Three plus one refers to three dimensions of space, $x$, $y$, $z$, and one dimension of time $t$, and the four of these variables are typically ordered with time first, followed by space, and mathematically we express this as a column vector

$$\begin{pmatrix} t \\ x \\ y \\ z \end{pmatrix}$$

and frequently denoted by $x^\mu$ where the Greek letter $\mu$ is *not a power*, but *an index* running over indices $0, 1, 2, 3$, or $t, x, y, z$, depending on the weather (it really is that arbitrary, which is why we always preach consistency...). In physics we call this column vector $x^\mu$ in spacetime a *4-vector*. Our symbol for "space" is $\mathbb{R}^3$, which is often called Euclidean space, 3D-space, etc., while our symbol for time is $\mathbb{R}$. The reason we typically hesitate to write $\mathbb{R}^4$ to refer to spacetime generally is the sign difference between time and space in the matrix representation of the Minkowski metric, and instead we emphasize just as with 3+1 the difference in footing by notation such as $\mathbb{R}^3 \times \mathbb{R}$.

Expressing things in terms of matrices and vectors will become more important when we actually attempt to do some numerical relativity. For the moment, let's just get comfortable reading this notation: for $\eta_{\mu \nu}$, we see when the indices $\mu \neq \nu$ that $\eta_{\mu \nu} = 0$, but when $\mu = \nu$, $\eta_{\mu \mu} = \mp 1$. Concretely, $\eta_{0 0} = -1$ but $\eta_{0 1} = \eta_{1 0} = 0$. For the 4-vector, $x^0 = t$, $x^1 = x$, and so on.

The line element we are going to be focusing on is the Schwarzschild one, given by

$$ds^2 = - f(r) dt^2 + \dfrac{dr^2}{f(r)} + r^2(d\theta^2 + \sin^2{\theta} \, d\varphi^2) \tag{2}$$

which in matrix form $g_{\mu \nu}$ is diagonal

$$g_{\mu \nu} = \begin{pmatrix} - f(r) & 0 & 0 & 0 \\ 0 & \dfrac{1}{f(r)} & 0 & 0 \\ 0 & 0 & r^2 & 0 \\ 0 & 0 & 0 & r^2 \sin^2{\theta} \end{pmatrix} \tag{3}$$

and where $f(r) = 1 - r_s / r$, with $r_s$ denoting the mass-dependent *Schwarzschild radius*, at which there is a coordinate singularity. Metrics like this are where and when we really start practicing some GR, because unlike with the Minkowski metric the Schwarzschild metric is measuring time and space a bit differently depending on this radius $r$, which in this setting is the distance to the center of the massive object in question. For $r > r_s$, as $r$ approaches $r_s$, can you convince yourself this predicts for this metric that time ought to slow down for clocks at closer and closer distances, compared to clocks further out?

We'll wrap up this post with writing down the *Christoffel symbols* $\Gamma_{\mu \nu}^\lambda$ associated to the Schwarzschild metric $g_{\mu \nu}$, which we will need to perform various computations later on. The Christoffel symbols are also called *connection coefficients*, and are nontrivial in curved space(time)s. In general, they are

$$\Gamma_{\mu \nu}^\lambda = \frac{1}{2} g^{\lambda \sigma} (\partial_\mu g_{\nu \sigma} + \partial_\nu g_{\sigma \mu} - \partial_\sigma g_{\mu \nu}) \tag{4}$$

where there are some conventions at play, including the one we chose earlier. Each of the lower case Greek letters, $\lambda, \mu, \nu, \sigma$ is its own *index* spanning $0, 1, 2, 3$ or $t, r, \theta, \varphi$ in the chosen coordinates. Indeed, while they are not all necessarily nonzero nor unique, there are in general $4^3 = 64$ Christoffel symbols. It turns out that in the case of diagonal metrics, such as the Schwarzschild metric we wrote down, we have some useful identities:

$$\begin{align*} \Gamma_{\mu \nu}^\lambda &= 0 \\ \Gamma_{\mu \mu}^\lambda &= - \frac{1}{2} (g_{\lambda \lambda})^{-1} \partial_\lambda g_{\mu \mu} \\ \Gamma_{\mu \lambda}^\lambda &= \partial_\mu \left( \ln{\sqrt{|g_{\lambda \lambda}|}} \right) \\ \Gamma_{\lambda \lambda}^\lambda &= \partial_\lambda \left( \ln{\sqrt{|g_{\lambda \lambda}|}} \right) \end{align*} \tag{5}$$

__NOTE__: The identities written here are for $\mu \neq \nu \neq \lambda$, and repeated indices are not summed over. I will not repeat the derivation of these identities here, if there is interest I do not mind sharing more detail in another form. Otherwise, do the exercise, it is a common one found in GR books.

- The first identity means that at least $4! = 24$ of the $64$ symbols are $0$.

- If we notice that the Schwarzschild metric has no explicit dependence on time $t$, the second identity yields for $\lambda = t$

   $$\Gamma_{\mu \mu}^t = - \frac{1}{2} (g_{t t})^{-1} \partial_t g_{\mu \mu} = 0$$

   which is $3$ more zeros for $\mu = r, \theta, \varphi$. In a similar vein,

   $$ \Gamma_{\mu \mu}^\varphi = \Gamma_{t t}^\theta = \Gamma_{r r}^\theta = 0 {,}$$

   which brings us up to $8$ zeros from the second identity, or $32$ in total.

- The lack of time dependence comes in handy for the third identity as well

   $$\Gamma_{t \lambda}^\lambda = \partial_t \left( \ln{\sqrt{|g_{\lambda \lambda}|}} \right) = 0$$

   giving us $3$ more zeroes; as well as the lack of any $\varphi$ dependence, and the fact that the $g_{t t}, g_{r r}$ terms only depend on $r$

   $$\Gamma_{\varphi \lambda}^\lambda = \Gamma_{\theta t}^t = \Gamma_{\theta r}^r = 0 {,}$$

   another $5$. Notice from $(4)$ that we have a symmetry in the lower indices $\Gamma_{\mu \nu}^\lambda = \Gamma_{\nu \mu}^\lambda$, when combined with the third identity $\Gamma_{\lambda t}^\lambda = \Gamma_{\lambda \varphi}^\lambda = \Gamma_{t \theta}^t = \Gamma_{r \theta}^r = 0$, $8$ more. We've determined $48$ of the symbols are $0$.

- The fourth identity yields $3$ more zeros

   $$\Gamma_{t t}^t = \Gamma_{\theta \theta}^\theta =  \Gamma_{\varphi \varphi}^\varphi = 0$$

   bringing our total up to $51$ vanishing Christoffel symbols. Not bad!

So we have $13$ non-vanishing symbols left to compute. Let's list them out:

$$\begin{align*} \Gamma_{\mu \mu}^r &= - \frac{1}{2} \left( g_{r r} \right)^{-1} \partial_r g_{\mu \mu} = \begin{cases} \color{#5e3aa1}{\dfrac{f(r) f'(r)}{2}} {,} &\quad \mu = t \\ \color{#5e3aa1}{- r f(r)} {,} &\quad \mu = \theta \\ \color{#5e3aa1}{- r \sin^2{\theta} f(r)} {,} &\quad \mu = \varphi \end{cases} \\
\Gamma_{\varphi \varphi}^\theta &= - \frac{1}{2} \left( g_{\theta \theta} \right)^{-1} \partial_\theta g_{\varphi \varphi} = \color{#5e3aa1}{-\sin{\theta} \cos{\theta}} \\
\Gamma_{\theta \varphi}^\theta &= \Gamma_{\varphi \theta}^\theta = \partial_\theta \left( \ln{\sqrt{|g_{\varphi \varphi}|}} \right) = \color{#5e3aa1}{\cot{\theta}} \\
\Gamma_{r \lambda}^\lambda &= \Gamma_{\lambda r}^\lambda = \partial_r \left( \ln{\sqrt{|g_{\lambda \lambda}|}} \right) = \begin{cases} \color{#5e3aa1}{\dfrac{\partial_r |f(r)|}{2 |f(r)|}} {,} &\quad \lambda = t \\ \color{#5e3aa1}{\dfrac{1}{r}} {,} &\quad \lambda = \theta \\ \color{#5e3aa1}{\dfrac{1}{r}} {,} &\quad \lambda = \varphi \end{cases} \\
\Gamma_{r r}^r &= \partial_r \left( \ln{\sqrt{|g_{r r}|}} \right) = \color{#5e3aa1}{- \dfrac{\partial_r | f(r) |}{2 |f(r)|}} \end{align*}$$

If we restrict ourselves to $r > r_s$, then $f(r)$ is manifestly positive and we can drop the absolute value signs in order to simplify computations a little bit.

In the next entry in getting carried away, we'll use these computed Christoffel symbols to work out the geodesic equations.

### Reference(s)
Really, any textbook on GR should cover this, such as *Sean Carroll's Spacetime and Relativity*.
